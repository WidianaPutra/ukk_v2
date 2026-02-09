"use client";
import { useSearchParams } from "next/navigation";

const Dashboard = () => {
  const params = useSearchParams();
  return (
    <div className="bg-red-500">
      <h1>Testing hehe</h1>
    </div>
  );
};

export default Dashboard;
