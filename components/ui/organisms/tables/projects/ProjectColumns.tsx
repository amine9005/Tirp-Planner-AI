"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PenBoxIcon } from "lucide-react";
import Link from "next/link";
import DeleteDialog from "@/components/ui/organisms/dialog/project/delete-dialog/DeleteDialog.dialog";
import { P } from "@/components/ui/atoms/text/Text";
import SetProjectAsFeaturedColumn from "./SetProjectAsFeatured.column";
import { ProjectType } from "@/types/project.types";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ProjectType>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "description",
    header: "Description",
  },

  {
    accessorKey: "isFeatured",
    header: "Featured",

    cell: ({ row }) => (
      <SetProjectAsFeaturedColumn
        project={row.original}
        labelTitle={"Feature This Project"}
        checked={row.original.isFeatured}
        checkFor={row.original._id!}
      />
    ),
  },

  {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => (
      <DeleteDialog
        title={"Delete Project"}
        id={row.original._id!}
        text={
          <P>
            Are you sure you want to delete:
            <span className="text-destructive">{" " + row.original.title}</span>
          </P>
        }
      />
    ),
  },

  {
    id: "Edit",
    header: "Edit",
    cell: ({ row }) => (
      <Link href={"/admin/project/" + row.original._id!}>
        <PenBoxIcon className="size-5 hover:text-primary cursor-pointer hover:scale-110" />
      </Link>
    ),
  },
];
