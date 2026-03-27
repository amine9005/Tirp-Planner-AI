"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { UploadRoutes } from "@/validations/upload.validate";

interface Props {
  file: File;
  route: UploadRoutes;
}

export const useUpload = () => {
  const uploadFn = async (props: Props) => {
    const formData = new FormData();
    formData.append("file", props.file);

    let url = "";
    switch (props.route) {
      case "LOGO":
        url = "/api/upload/images/logo";
        break;
      case "PROJECT IMAGE":
        url = "/api/upload/images/project";
        break;
      case "HERO IMAGE":
        url = "/api/upload/images/hero";
        break;
      case "3D MODEL":
        url = "/api/upload/3d-model";
        break;
      case "HERO VIDEO":
        url = "/api/upload/video/hero";
        break;
      case "PROJECT VIDEO":
        url = "/api/upload/video/project";
        break;
      case "CONTACT":
        url = "/api/upload/contact-me";
        break;
      default:
        url = "/api/upload/";
    }
    const response = await axiosInstance.post(url, formData);
    return response.data;
  };
  return useMutation({
    mutationFn: uploadFn,
  });
};
