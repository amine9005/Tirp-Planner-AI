"use client";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { Label } from "@/components/ui/atoms/label/label";
import { P } from "@/components/ui/atoms/text/Text";
import { useGetProjectRequestByIdQuery } from "@/hooks/queries/useProjectRequestQuery.hook";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ViewProjectRequestAction = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetProjectRequestByIdQuery(
    id as string,
  );

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
    <div className="flex flex-col justify-center items-center min-h-120 gap-8">
      <div className="grid  grid-cols-4 gap-4">
        <Label>Subject:</Label>
        <Label className="text-primary col-span-3">{data.subject}</Label>
        <Label>Email:</Label>
        <Label className="text-primary col-span-3">{data.email}</Label>
        <Label>Full Name:</Label>
        <Label className="text-primary col-span-3">{data.fullName}</Label>
        <Label>Description:</Label>
        <Label className="text-primary col-span-3">{data.description}</Label>
        {/* Hide Scroll Bar */}
        <div className="col-span-4 space-y-4 max-h-80 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <H2 size={"lg"}>Files:</H2>
          {data.fileUrls.map((url: string, index: number) => (
            <Link
              className="flex items-center gap-2 hover:text-primary"
              target="_blank"
              key={index}
              href={"/api/stream/download/" + url}
            >
              {" "}
              {url}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProjectRequestAction;
