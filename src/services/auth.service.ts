"use server";
import { Student, Admin } from "@/generated/prisma";
import { ServiceResultType } from "@/types/ServiceResult";
import { prisma } from "@/utils/prisma";
import { handleError } from "@/utils/handleError";
import { generateToken } from "@/utils/jwt";
import z from "zod";

type StudnetLoginProps = {
  req?: Request;
  identifier: string;
  password: number;
};

export async function loginAuth({
  req,
  identifier,
  password,
}: StudnetLoginProps): Promise<ServiceResultType<Student>> {
  try {
    const isStudent = identifier.startsWith("student");
    const isTeacher = identifier.startsWith("teacher");
    if (isStudent) {
      const studentNis = identifier.split("-")[1];
      if (typeof password === "number" && parseInt(studentNis) === password)
        return { ok: false, error: "Invalid username or password" };

      const data = await prisma.student.findUnique({
        where: { nis: parseInt(studentNis) },
      });

      if (!data || !data.id)
        return { ok: false, error: "Invalid username or password" };

      const jwt = generateToken({ id: data.id, role: "student" });

      return { ok: true, data: jwt };
    }

    if (isTeacher) {
      const teacherSchema = z.object({
        teacherEmail: z.email(""),
        password: z.string().min(8, "Password must be more then 7 characters"),
      });
      const teacherEmail = identifier.split("-")[1];
      const teacherParse = teacherSchema.safeParse({ teacherEmail, password });

      if (!teacherParse.success) {
        return { ok: false, error: "" };
      }
    }
  } catch (err) {
    return handleError(err, "studentLogin");
  }
}
