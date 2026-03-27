"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  copyright: string;
  primaryColor: string;
  secondaryColor: string;
  useCircle: boolean;
  circleColor: string;
}

export const useSettingsMutation = () => {
  const queryClient = useQueryClient();
  const useSettingsMutationFn = async ({
    copyright,
    primaryColor,
    secondaryColor,
    useCircle,
    circleColor,
  }: props) => {
    const response = await axiosInstance.post("/api/admin/settings", {
      copyright,
      primaryColor,
      secondaryColor,
      useCircle,
      circleColor,
    });
    return response;
  };

  return useMutation({
    mutationFn: useSettingsMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
  });
};
