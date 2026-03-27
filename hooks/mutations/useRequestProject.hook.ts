"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface email {
  fullName: string;
  email: string;
  subject: string;
  description: string;
  fileUrls: string[];
}

export const useSaveProjectRequest = () => {
  const saveProjectRequestFn = async ({
    fullName,
    email,
    subject,
    description,
    fileUrls,
  }: email) => {
    const response = await axiosInstance.post("/api/emails/save", {
      fullName,
      email,
      subject,
      description,
      fileUrls,
    });
    return response;
  };

  return useMutation({
    mutationFn: saveProjectRequestFn,
  });
};
