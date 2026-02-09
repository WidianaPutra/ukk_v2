"use client";
import React from "react";
import { useState } from "react";
import PsSVG, { PsSVGName } from "@/components/Ps/PsSVG";
import Link from "next/link";
import { cn } from "@/utils/cn";

type PsAdminLayoutPropTypes = {
  children?: React.ReactNode;
  size?: "auto" | "manual";
};

const data: Array<{ label: string; url: string; icon: PsSVGName }> = [
  {
    label: "Home",
    url: "/dashboard?page=dashboard",
    icon: "home",
  },
  {
    label: "Pengaduan",
    url: "/dashboard?page=reports",
    icon: "list",
  },
  {
    label: "Kategori",
    url: "/dashboard?page=cagegories",
    icon: "tag",
  },
  {
    label: "Admin",
    url: "/dashboard?page=admins",
    icon: "user",
  },
  {
    label: "Siswa",
    url: "/dashboard?page=students",
    icon: "graduation-cap",
  },
];

const PsAdminLayout = ({ children, size = "auto" }: PsAdminLayoutPropTypes) => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="h-screen flex">
        {/* Sidebar */}
        <div className="max-w-[250px] w-[300px] bg-blue-600">
          <h1 className="p-5 text-white text-[25px] font-bold">
            Reports System
          </h1>
          <div className={`flex flex-col`}>
            {data?.map(
              (
                data: { label: string; url: string; icon: PsSVGName },
                i: number,
              ) => (
                <Link href={data?.url} className="text-white text-xl" key={i}>
                  <div className="flex items-center hover:bg-purple p-5 gap-x-3">
                    <PsSVG name={data?.icon} className="text-white w-[35px]" />
                    <p>{data?.label}</p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
        {/* contain */}
        <div
          className={cn(
            "overflow-y-scroll min-w-[100px] min-h-screen flex-1 flex justify-center mt-10",
          )}
        >
          <div className={cn(size === "auto" ? "w-[95%]" : "")}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PsAdminLayout;
