"use client";

import { ProjectRequest } from "@/types/ProjectRequest.type";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ProjectRequest>[] = [
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "view",
    header: "View Request",

    cell: ({ row }) => (
      <Link
        href={"/admin/requests/" + row.original._id!}
        className="flex justify-start items-center gap-2 hover:text-primary"
      >
        <EyeIcon className="size-6" />
        Open
      </Link>
    ),
  },
];
