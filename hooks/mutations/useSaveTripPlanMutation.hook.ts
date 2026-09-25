"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { TripPlan } from "@/db/models/TripPlan.model";

export const useSaveTripPlanMutation = () => {
  const queryClient = useQueryClient();
  const saveTripPlanMutationFn = async ({
    destination,
    duration,
    origin,
    budget,
    travel_interests,
    special_requirements,
    group_size,
    hotels,
    activities,
  }: TripPlan) => {
    const response = await axiosInstance.post("api/trip-planner/save", {
      destination,
      duration,
      origin,
      budget,
      travel_interests,
      special_requirements,
      group_size,
      hotels,
      activities,
    });

    return response;
  };

  return useMutation({
    mutationFn: saveTripPlanMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip-plans"] });
    },
  });
};
