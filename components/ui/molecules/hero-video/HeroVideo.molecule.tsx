import { BlurFade } from "@/components/ui/Effects/blur-fade";
import ReactPlayer from "react-player";
import Player from "next-video/player";

interface Props {
  videoUrl: string | undefined;
  videoFileName: string | undefined;
  videoSource: "Other" | "YouTube" | "Google Drive" | "Upload" | "Mux" | string;
}

const HeroVideoMolecule = ({ videoSource, videoUrl, videoFileName }: Props) => {
  // console.log("Video Source: ", videoSource.toString() === "YouTube");

  if (videoSource === "Google Drive") {
    return (
      <iframe
        className="rounded-lg bg-gray-300 object-cover w-auto sm:w-140 h-100"
        width={720}
        height={480}
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
        className="rounded-lg bg-gray-300 object-cover w-auto sm:w-140 h-100"
        width={720}
        height={480}
        src={videoUrl}
        title="Embedded Youtube Video"
        playing={true}
        loop={true}
      />
    );
  }

  if (videoSource === "Upload") {
    return (
      <BlurFade onlyOnce={false} delay={0.6} inView>
        <video
          className="rounded-lg bg-transparent w-full md:w-160 h-80 p-4"
          preload="true"
          controls={false}
          muted
          autoPlay={true}
          loop={true}
          src={
            // "https://stream.mux.com/Uj3xQat00Dsg8023Y01IKzYBlTnnp567ad5ZLQ2c00hZlOs.m3u8"
            "/hero/videos/" + videoFileName
          }
        ></video>
      </BlurFade>
    );
  }

  if (videoSource === "Mux") {
    return (
      <BlurFade onlyOnce={false} delay={0.6} inView>
        <video
          className="rounded-lg bg-transparent w-full md:w-160 h-80 p-4"
          controls={false}
          muted
          autoPlay={true}
          loop={true}
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
        className="rounded-lg bg-transparent w-full md:w-160 h-80 p-4"
        controls={false}
        muted
        autoPlay={true}
        loop={true}
        src={videoUrl}
      ></Player>
    </BlurFade>
  );
};

export default HeroVideoMolecule;
