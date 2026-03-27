"use client";
import { columns } from "@/components/ui/organisms/tables/projects/ProjectColumns";
import { DataTable } from "@/components/ui/organisms/tables/projects/ProjectDataTable";
import { useProjectsQuery } from "@/hooks/queries/useProjectQuery.hook";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";

export default function ProjectList() {
  const { data, isLoading, error } = useProjectsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Project."}
        </P>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
