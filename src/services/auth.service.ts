"use server";
import { Student, Admin } from "@/generated/prisma";
import { prisma } from "@/utils/prisma";
import { handleError } from "@/utils/handleError";
import { generateToken } from "@/utils/jwt";
import { AuthServiceResult } from "@/types/ServiceResult";
import bcrypt from "bcrypt";

type AuthLoginProps = {
  identifier: string;
  password: string;
};

async function LoginStudent(
  nis: number,
  password: string,
): Promise<AuthServiceResult> {
  try {
    const student = await prisma.student.findUnique({ where: { nis } });

    if (!student) return { ok: false, error: "Invalid username or password" };

    if (parseInt(password) !== student.nis)
      return { ok: false, error: "Invalid username or password" };

    const token = generateToken({ id: student.id, role: "student" });
    return { ok: true, token };
  } catch (err) {
    return handleError(err, "lgoinStudent");
  }
}

async function loginAdmin(
  email: string,
  password: string,
): Promise<AuthServiceResult> {
  try {
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) return { ok: false, error: "Invalid username or password" };
    if (!(await bcrypt.compare(password, admin.password)))
      return { ok: false, error: "Invalid username or password" };

    const token = generateToken({ id: admin.id, role: "admin" });
    return { ok: true, token };
  } catch (err) {
    return handleError(err, "lgoinStudent");
  }
}

export async function loginAuth({
  identifier,
  password,
}: AuthLoginProps): Promise<AuthServiceResult> {
  try {
    if (identifier.startsWith("student-")) {
      const nis = Number(identifier.split("-")[1]);

      if (typeof password !== "number") {
        return { ok: false, error: "Invalid username or password" };
      }

      return LoginStudent(nis, password);
    }

    if (identifier.startsWith("admin-")) {
      if (typeof password !== "string") {
        return { ok: false, error: "Invalid username or password" };
      }
      const email = identifier.split("-")[1];
      return loginAdmin(email, password);
    }

    return { ok: false, error: "Invalid format identifier" };
  } catch (err) {
    return handleError(err, "studentLogin");
  }
}
