"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { heroMediaSchemaType } from "@/validations/hero.zod";
import { useHeroMediaMutation } from "@/hooks/mutations/useHeroMediaMutation.hook";

export function useHeroMediaSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateHeroMedia } = useHeroMediaMutation();

  const onSubmit: SubmitHandler<heroMediaSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const displayType = data.displayType;
        const videoSource = data.videoSource;
        const videoUrl = data.videoUrl;
        const videoFileName = data.videoFileName;
        const imageUrl = data.imageUrl;
        const model3D_Url = data.model3D_Url;

        await updateHeroMedia({
          displayType,
          imageUrl,
          model3D_Url,
          videoSource,
          videoUrl,
          videoFileName,
        });

        success = true;
        toast.success("Hero Media Updated Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [updateHeroMedia],
  );

  return { loading, onSubmit };
}
