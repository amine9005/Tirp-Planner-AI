import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { videoSchema, VideoSchemaType } from "@/validations/video.zod";

export const useVideoDisplayForm = () => {
  const form = useForm<VideoSchemaType>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      videoSource: "",
      videoUrl: "",
      videoFileName: "",
    },
  });

  return form;
};
