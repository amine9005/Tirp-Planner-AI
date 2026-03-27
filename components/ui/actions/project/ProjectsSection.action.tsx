"use client";
import ProjectCard from "@/components/ui/organisms/cards/project/ProjectCard.organism";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { ProjectType } from "@/types/project.types";
import Link from "next/link";

const ProjectsAction = ({ data }: { data: ProjectType[] | null }) => {
  if (!data) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 p-8 lg:px-24 ">
      {data.map((project: ProjectType, idx: number) =>
        project.isFeatured ? (
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
        ) : null,
      )}
    </div>
  );
};

export default ProjectsAction;
