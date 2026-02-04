"use server";
import { prisma } from "@/utils/prisma";
import { handleError } from "@/utils/handleError";
import { Report, Status } from "@/generated/prisma";
import { GeneralServiceResult } from "@/types/ServiceResult";
import { CleanPrismaData } from "@/types/CleanPrismaData";

type GetReportProps =
  | {
      key?: "id" | "nis";
      value?: string | number;
    }
  | { key?: "status"; value: Status };

type InserteNewReportProps = {
  data: Omit<Report, "createdAt" | "updatedAt" | "id">;
};

export async function getReport({
  key,
  value,
}: GetReportProps): Promise<GeneralServiceResult<Report>> {
  try {
    const filter =
      key == "id"
        ? { id: String(value) }
        : key == "nis"
          ? { nis: Number(value) }
          : key == "status"
            ? { status: value }
            : {};

    const report = await prisma.report.findMany({
      where: filter,
      include: { admin: true, category: true, student: true },
    });

    if (!report || report.length <= 0) {
      return { ok: false, error: "Data not found" };
    }

    return { ok: true, data: report };
  } catch (err) {
    return handleError(err, "getReport");
  }
}

export async function insertNewReport({
  data,
}: InserteNewReportProps): Promise<GeneralServiceResult<Report>> {
  try {
    const report = await prisma.report.create({ data });

    if (!report) {
      return { ok: false, error: "Cannot insert report data into database" };
    }

    return { ok: true, data: report };
  } catch (err) {
    return handleError("err", "insertNewReport");
  }
}

export async function updateReportStatus(
  id: string,
  status: Status,
): Promise<GeneralServiceResult<Report>> {
  try {
    const report = await prisma.report.update({
      data: { status },
      where: { id },
    });

    if (!report) {
      return { ok: false, error: "Cannot update updata" };
    }

    return { ok: true, data: report };
  } catch (err) {
    return handleError(err, "updateReportStatus");
  }
}

export async function updateReport(
  id: string,
  data: Partial<CleanPrismaData<Report>>,
): Promise<GeneralServiceResult<Report>> {
  try {
    const report = await prisma.report.update({ data, where: { id } });

    if (!report) {
      return { ok: false, error: "Cannot update report data" };
    }

    return { ok: true, data: report };
  } catch (err) {
    return handleError(err, "updateReport");
  }
}

export async function deleteReport(
  id: string,
): Promise<GeneralServiceResult<Report>> {
  try {
    const report = await prisma.report.delete({ where: { id } });

    if (!report) {
      return { ok: false, error: "Cannot delete report data" };
    }

    return { ok: true, data: report };
  } catch (err) {
    return handleError(err, "deleteReport");
  }
}
