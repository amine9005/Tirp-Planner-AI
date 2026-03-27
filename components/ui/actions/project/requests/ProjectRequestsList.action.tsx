"use client";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import { columns } from "@/components/ui/organisms/tables/projects/requests/RequestsColumns";
import { useGetRequestsQuery } from "@/hooks/queries/useProjectRequestQuery.hook";
import { ProjectRequestsDataTable } from "@/components/ui/organisms/tables/projects/requests/RequestsDataTable";

const ProjectRequestsList = () => {
  const { data, isLoading, error } = useGetRequestsQuery();

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
      <div className="flex justify-center items-center h-screen">
        <span className="text-2xl text-destructive">An Error Has Occurred</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full py-10">
      <ProjectRequestsDataTable columns={columns} data={data} />
    </div>
  );
};

export default ProjectRequestsList;
