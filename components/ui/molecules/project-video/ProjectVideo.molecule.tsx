import { BlurFade } from "@/components/ui/Effects/blur-fade";
import ReactPlayer from "react-player";
import Player from "next-video/player";

interface Props {
  videoUrl: string | undefined;
  videoFileName: string | undefined;
  videoSource: "Other" | "YouTube" | "Google Drive" | "Upload" | "Mux" | string;
}

const ProjectVideoMolecule = ({
  videoSource,
  videoUrl,
  videoFileName,
}: Props) => {
  // console.log("Video Source: ", videoSource.toString() === "YouTube");

  if (videoSource === "Google Drive") {
    return (
      <iframe
        className="rounded-lg bg-transparent min-h-50 w-full"
        width={"100%"}
        height={"100%"}
        // src={`https://drive.google.com/file/d/1Wiq0rwCcI23Bmt2NcRd87hdppXafVAhN/preview`}
        src={videoUrl}
        title="Embedded Google Drive Video"
      />
    );
  }
  if (videoSource === "YouTube") {
    // console.log("Youtube Video Source: ", videoUrl);
    return (
      <ReactPlayer
        className="rounded-lg bg-transparent min-h-50 w-full"
        width={"100%"}
        height={"100%"}
        src={videoUrl}
        title="Embedded Youtube Video"
        controls={true}
        autoPlay={false}
        loop={false}
      />
    );
  }

  if (videoSource === "Upload") {
    return (
      <BlurFade onlyOnce={false} delay={0.6} inView>
        <video
          className="rounded-lg bg-transparent min-h-50 w-full"
          controls={true}
          autoPlay={false}
          loop={false}
          src={
            // "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
            "/projects/videos/" + videoFileName
          }
        ></video>
      </BlurFade>
    );
  }

  if (videoSource === "Mux") {
    return (
      <BlurFade onlyOnce={false} delay={0.6} inView>
        <video
          className="rounded-lg bg-transparent min-h-50 w-full"
          controls={true}
          autoPlay={false}
          loop={false}
          src={
            // "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
            videoUrl
          }
        ></video>
      </BlurFade>
    );
  }

  return (
    <BlurFade onlyOnce={false} delay={0.6} inView>
      <Player
        className="rounded-lg bg-transparent min-h-50 w-full"
        controls={false}
        muted
        autoPlay={true}
        loop={true}
        src={videoUrl}
      ></Player>
    </BlurFade>
  );
};

export default ProjectVideoMolecule;
