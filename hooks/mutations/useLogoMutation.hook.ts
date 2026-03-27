"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  fullName: string;
  rightColor: string;
  leftColor: string;
  imagePath: string | null;
  useImage: boolean;
}

export const useLogoMutation = () => {
  const queryClient = useQueryClient();
  const useLogoMutationFn = async ({
    fullName,
    imagePath,
    useImage,
    rightColor,
    leftColor,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/logo", {
      fullName,
      imagePath,
      useImage,
      rightColor,
      leftColor,
    });
    return response;
  };

  return useMutation({
    mutationFn: useLogoMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["logo"] });
    },
  });
};
