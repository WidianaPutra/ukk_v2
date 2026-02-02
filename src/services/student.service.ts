"use server";
import { prisma } from "@/utils/prisma";
import { Student } from "@/generated/prisma";

export type ClearStudentData = Omit<Student, "createdAt" | "updatedAt" | "id">;
type GetStudentProps = {
  id: string;
  report?: boolean;
};

export async function getStudentById({ id, report }: GetStudentProps) {
  try {
    const student = await prisma.student.findUnique({
      where: { id },
      include: report ? { reports: true } : {},
    });
    if (!student) {
      return null;
    }
    return student;
  } catch (err) {
    return { error: "Internal server error" };
  }
}

export async function createStudentData(data: ClearStudentData) {
  try {
    const student = await prisma.student.create({ data: data });
    if (!student) {
      return null;
    }
    return student;
  } catch (err) {
    return { error: "Internal server error" };
  }
}
