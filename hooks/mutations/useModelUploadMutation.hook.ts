"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  file: File;
}

export const useModelUploadMutation = () => {
  const queryClient = useQueryClient();
  const useLogoMutationFn = async ({ file }: props) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axiosInstance.post(
      "/api/admin/upload/3d-model",
      formData,
    );
    return response;
  };

  return useMutation({
    mutationFn: useLogoMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero-media"] });
    },
  });
};
