"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { Video } from "@/types/project.types";

interface props {
  id?: string;
  title: string;
  description: string;
  projectImages: string[] | undefined;
  projectVideos: Video[] | undefined;
  projectModels: string[] | undefined;
  isFeatured: boolean;
  thumbnail: { type: string; source: string; fileOrUrl: string | undefined };
}

export const useProjectMutation = () => {
  const queryClient = useQueryClient();
  const useProjectMutationFn = async ({
    id,
    projectImages,
    title,
    description,
    projectVideos,
    projectModels,
    isFeatured,
    thumbnail,
  }: props) => {
    if (id) {
      // console.log("sending videos ", projectVideos);
      const response = await axiosInstance.put(
        "/api/admin/project/update/" + id,
        {
          projectImages,
          title,
          description,
          projectVideos,
          projectModels,
          isFeatured,
          thumbnail,
        },
      );
      return response;
    }
    const response = await axiosInstance.post("/api/admin/project/add", {
      projectImages,
      title,
      description,
      projectVideos,
      projectModels,
      isFeatured,
      thumbnail,
    });
    return response;
  };

  return useMutation({
    mutationFn: useProjectMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();

  const useProjectDeleteMutationFn = async ({ id }: { id: string }) => {
    const response = await axiosInstance.delete(
      "/api/admin/project/delete/" + id,
    );
    return response;
  };
  return useMutation({
    mutationFn: useProjectDeleteMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

export const useUpdateProjectByIdMutation = () => {
  const queryClient = useQueryClient();

  const useUpdateProjectByIdMutationFn = async ({ id }: { id: string }) => {
    const response = await axiosInstance.post(
      "/api/admin/project/update/" + id,
    );
    return response;
  };
  return useMutation({
    mutationFn: useUpdateProjectByIdMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProjectById"] });
    },
  });
};

export const useDeleteMutation = () => {
  const useDeleteMutationFn = async ({
    deleteRoute,
    id,
  }: {
    id: string;
    deleteRoute: string;
  }) => {
    const response = await axiosInstance.delete(deleteRoute + id);
    return response;
  };
  return useMutation({
    mutationFn: useDeleteMutationFn,
  });
};
