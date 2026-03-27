"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  type: string;
  source: string;
  fileOrUrl: string;
}

export const useThumbnailMutation = () => {
  const queryClient = useQueryClient();
  const useThumbnailMutationFn = async ({ type, source, fileOrUrl }: props) => {
    const response = await axiosInstance.post("/api/admin/project/thumbnail", {
      type,
      source,
      fileOrUrl,
    });
    return response;
  };

  return useMutation({
    mutationFn: useThumbnailMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["thumbnails"] });
    },
  });
};
