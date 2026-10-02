"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  placeName: string;
}

export const useGooglePlacesImagesMutation = () => {
  const queryClient = useQueryClient();
  const useGooglePlacesImagesMutationFn = async ({ placeName }: props) => {
    const response = await axiosInstance.post(
      "/api/trip-planner/google/place-details",
      {
        placeName,
      },
    );
    return response;
  };

  return useMutation({
    mutationFn: useGooglePlacesImagesMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["place-details"] });
    },
  });
};
