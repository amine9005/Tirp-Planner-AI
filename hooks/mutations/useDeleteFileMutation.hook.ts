"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface Props {
  route: string;
  name: string;
}

export const useUpload = () => {
  const deleteFn = async ({ route, name }: Props) => {
    const response = await axiosInstance.delete(route + name);
    return response.data;
  };
  return useMutation({
    mutationFn: deleteFn,
  });
};
