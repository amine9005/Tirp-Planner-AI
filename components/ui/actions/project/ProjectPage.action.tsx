"use client";
import { ImageStackCarousel } from "@/components/ui/Effects/ImageStackCarousel";
import Image from "next/image";
import { motion } from "motion/react";
import { useGetProjectByIdQuery } from "@/hooks/queries/useProjectQuery.hook";
import { useParams } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import { Video } from "@/types/project.types";
import ProjectVideoMolecule from "@/components/ui/molecules/project-video/ProjectVideo.molecule";
import Project3DModelMolecule from "@/components/ui/molecules/project-3d-model/Project3DModel.molecule";

const ProjectPageAction = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProjectByIdQuery(id as string);

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
  const projectImages = data.images.map((name: string) => {
    return {
      node: (
        <Image
          src={"/projects/images/" + name}
          alt={name}
          width={1080}
          height={720}
          draggable={false}
          className="h-full w-full rounded-3xl object-cover object-center"
        />
      ),
    };
  });

  const projectVideos = data.videos.map((video: Video) => {
    return {
      node: (
        <ProjectVideoMolecule
          videoUrl={video.url}
          videoFileName={video.fileName}
          videoSource={video.source}
        />
      ),
    };
  });

  const projectModels = data.models.map((fileName: string) => {
    return {
      node: <Project3DModelMolecule preview={false} modelName={fileName} />,
    };
  });

  console.log("projectImages ", projectImages);
  console.log("projectVideos ", projectVideos);
  console.log("projectModels ", projectModels);

  const projectMedia = [
    // {
    //   node: (
    //     <video
    //       className="rounded-lg bg-transparent h-full w-full"
    //       preload="true"
    //       controls={true}
    //       muted
    //       autoPlay={false}
    //       loop={false}
    //       src={
    //         "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
    //       }
    //     ></video>
    //   ),
    // },
    // {
    //   node: (
    //     <Image
    //       src={"/images/productImage.png"}
    //       alt={"Sarah Chen"}
    //       width={1080}
    //       height={720}
    //       draggable={false}
    //       className="h-full w-full rounded-3xl object-cover object-center"
    //     />
    //   ),
    // },
    // {
    //   node: (
    //     <Image
    //       src={"/images/productImage2.png"}
    //       alt={"Michael Rodriguez"}
    //       width={1080}
    //       height={720}
    //       draggable={false}
    //       className="h-full w-full rounded-3xl object-cover object-center"
    //     />
    //   ),
    // },
    // {
    //   node: (
    //     <Image
    //       src={"/images/productImage3.png"}
    //       alt={"Emily Watson"}
    //       width={1080}
    //       height={720}
    //       draggable={false}
    //       className="h-full w-full rounded-3xl object-cover object-center"
    //     />
    //   ),
    // },
    ...projectModels,
    ...projectVideos,
    ...projectImages,
  ];

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="w-full grid grid-cols-1 gap-20">
        <ImageStackCarousel stack={projectMedia} />
        <div className="flex w-full flex-col justify-between py-4">
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {data.title}
            </h3>
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              Project Sub Title
            </p> */}
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {data.description
                .split(" ")
                .map((word: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageAction;
