"use server";
import { prisma } from "@/utils/prisma";
import { Student } from "@/generated/prisma";
import { GeneralServiceResult } from "@/types/ServiceResult";
import { handleError } from "@/utils/handleError";

export type ClearStudentData = Omit<Student, "createdAt" | "updatedAt" | "id">;

type GetStudentProps = {
  id: string;
  report?: boolean;
};

type UpdateStudenProps = {
  data: Pick<ClearStudentData, "email" | "phone" | "name" | "birthday">;
  identifier: string;
};

type GetAllStudentProps = {
  key?: "name" | "nis";
  value?: string | number;
};

type DeleteStudentProps = {
  key: "id" | "nis";
  value: string | number;
};

export async function getStudentById({
  id,
  report,
}: GetStudentProps): Promise<GeneralServiceResult<Student>> {
  try {
    const student = await prisma.student.findUnique({
      where: { id },
      include: report ? { reports: true } : {},
    });
    if (!student) {
      return { ok: false, error: "Data not found" };
    }
    return { ok: true, data: student };
  } catch (err) {
    return handleError(err, "getStudentById");
  }
}

export async function getAllStudent({
  key,
  value,
}: GetAllStudentProps): Promise<GeneralServiceResult<Student>> {
  try {
    const filter =
      key == "name"
        ? { name: String(value) }
        : key == "nis"
          ? { nis: Number(value) }
          : {};
    const student = await prisma.student.findMany({ where: filter });

    if (student.length <= 0) {
      return { ok: false, error: "Data not found" };
    }

    return { ok: true, data: student };
  } catch (err) {
    return handleError(err, "getStudentById");
  }
}

export async function createStudentData(
  data: ClearStudentData,
): Promise<GeneralServiceResult<Student>> {
  try {
    const student = await prisma.student.create({ data: data });
    if (!student) {
      return { ok: false, error: "Cannot insert student data into database" };
    }
    return { ok: true, data: student };
  } catch (err) {
    console.log(err);
    return handleError(err, "createStudent");
  }
}

export async function updateStudent({
  data,
  identifier,
}: UpdateStudenProps): Promise<GeneralServiceResult<Student>> {
  try {
    const student = await prisma.student.update({
      data,
      where: { id: identifier },
    });

    if (!student) {
      return { ok: false, error: "Cannot update user data" };
    }
    return { ok: true, data: student };
  } catch (err) {
    console.log(err);
    return handleError(err, "updateStudent");
  }
}

export async function deleteStudent({
  key,
  value,
}: DeleteStudentProps): Promise<GeneralServiceResult<Student>> {
  try {
    const filters =
      key == "id" ? { id: String(value) } : { nis: Number(value) };

    const student = await prisma.student.delete({ where: filters });

    if (!student) {
      return { ok: false, error: "Field to delete student" };
    }
    return { ok: true, data: student };
  } catch (err) {
    return handleError(err, "deleteStudent");
  }
}
