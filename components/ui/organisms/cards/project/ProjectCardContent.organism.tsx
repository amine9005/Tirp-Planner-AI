import { P } from "@/components/ui/atoms/text/Text";
import Project3DModelMolecule from "@/components/ui/molecules/project-3d-model/Project3DModel.molecule";
import ProjectVideoMolecule from "@/components/ui/molecules/project-video/ProjectVideo.molecule";
import { ProjectType } from "@/types/project.types";
import Image from "next/image";

interface Props {
  project: ProjectType;
}

const ProjectCardContent = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {project.thumbnail.type === "Image" && (
        <Image
          className="relative w-full h-50 bg-gray-400 object-cover  rounded-lg"
          src={"/projects/images/" + project.thumbnail.fileOrUrl}
          alt="project image"
          width={240}
          height={240}
        />
      )}

      {project.thumbnail.type === "Video" && (
        <ProjectVideoMolecule
          videoUrl={project.thumbnail.fileOrUrl}
          videoSource={project.thumbnail.source}
          videoFileName={project.thumbnail.fileOrUrl}
        />
      )}

      {project.thumbnail.type === "Model" && (
        <Project3DModelMolecule
          preview={true}
          modelName={project.thumbnail.fileOrUrl!}
        />
      )}

      <P className="line-clamp-3">{project.description}</P>
    </div>
  );
};

export default ProjectCardContent;
