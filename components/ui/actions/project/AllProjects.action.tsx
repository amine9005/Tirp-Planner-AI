"use client";
import ProjectCard from "@/components/ui/organisms/cards/project/ProjectCard.organism";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { useProjectsQuery } from "@/hooks/queries/useProjectQuery.hook";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import { ProjectType } from "@/types/project.types";
import Link from "next/link";

const AllProjects = () => {
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
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 p-8 lg:px-24 ">
      {data.map((project: ProjectType, idx: number) => (
        <BlurFade onlyOnce={false} key={idx} delay={0.3 + idx * 0.1} inView>
          <Link href={"project/" + project._id}>
            <ProjectCard
              project={project}
              card={{
                title: project.title,
                description: project.description,
              }}
            />
          </Link>
        </BlurFade>
      ))}
    </div>
  );
};

export default AllProjects;
