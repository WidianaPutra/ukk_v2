"use client";
import PsAdminLayout from "@/sections/Ps/PsAdminLayout";
import PsBadge from "@/components/Ps/PsBedge";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import PsReportList from "@/components/Ps/PsTable";
import PsStatisticsCard from "@/components/Ps/PsStatisticsCard";
import PsTextArea from "@/components/Ps/PsTextArea";
import PsStudentLogin from "@/sections/Ps/PsAuthLogin";
import ClickToAction from "@/components/Ps/PsTable/clickToAction";
import PsViewDetail from "@/sections/Ps/PsViewDetail";

export default function Home() {
  return (
    <div className="h-auto px-3">
      <h1 className="">Hallo, World</h1>
      <PsButton>Acumala</PsButton>
      {/*  */}
      <PsInput label="Testing" error="testing testing" />
      <br />
      <PsTextArea fullHegiht={true} fullWidth={true} label="Testing" />
      <br />
      <PsBadge>Hallo, World</PsBadge>
      <br />
      <PsReportList
        headers={[
          "No",
          "NIS",
          "Kategori",
          "Pesan",
          "Tanggal",
          "Status",
          "Aksi",
        ]}
      >
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4">22001</td>
          <td className="px-6 py-4">Bullying</td>
          <td className="px-6 py-4 liea">Laporan contoh</td>
          <td className="px-6 py-4">06-02-2026</td>
          <td>
            <PsBadge>Ditolak</PsBadge>
          </td>
          <td>
            <ClickToAction deleteUrl="" updateUrl="" viewUrl="" />
          </td>
        </tr>
      </PsReportList>

      <ClickToAction deleteUrl="" updateUrl="" viewUrl="" />

      <br />
      <PsStatisticsCard
        title="Laporan Selesai"
        count={10}
        variant="green"
        width="fixed"
      />
      <br />
      <PsAdminLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <PsStatisticsCard count={10} title="Terselesaikan" variant="green" />
          <PsStatisticsCard count={10} title="Dikerjakan" variant="blue" />
          <PsStatisticsCard count={10} title="Menunggu" variant="yellow" />
          <PsStatisticsCard count={10} title="Ditolak" variant="red" />
        </div>
        <PsViewDetail />
      </PsAdminLayout>
      <br />

      <PsStudentLogin />
    </div>
  );
}
