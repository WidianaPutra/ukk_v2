import { prisma } from "@/utils/prisma";
import React from "react";

const page = async () => {
  const data = await prisma.admin.findMany();
  return <div>page</div>;
};

export default page;
