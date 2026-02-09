import PsAdminLayout from "@/sections/Ps/PsAdminLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PsAdminLayout size="auto">{children}</PsAdminLayout>
    </div>
  );
}
