"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  displayType: string;
  videoSource: string;
  imageUrl: string | undefined;
  videoUrl: string | undefined;
  model3D_Url: string | undefined;
  videoFileName: string | undefined;
}

export const useHeroMediaMutation = () => {
  const queryClient = useQueryClient();
  const useHeroMediaMutationFn = async ({
    displayType,
    videoSource,
    imageUrl,
    videoUrl,
    model3D_Url,
    videoFileName,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/hero/media", {
      displayType,
      videoSource,
      imageUrl,
      videoUrl,
      model3D_Url,
      videoFileName,
    });
    return response;
  };

  return useMutation({
    mutationFn: useHeroMediaMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero-media"] });
    },
  });
};
