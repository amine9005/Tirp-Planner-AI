"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface props {
  plan: string;
  successUrl: string;
  cancelUrl: string;
  returnUrl?: string;
}

export const useUpdateSubscriptionMutationHook = () => {
  const queryClient = useQueryClient();
  const useSubscriptionMutationFn = async ({
    plan,
    successUrl,
    cancelUrl,
    returnUrl,
  }: props) => {
    const response = await axiosInstance.post("/api/subscriptions", {
      plan,
      successUrl,
      cancelUrl,
      returnUrl,
    });
    return response;
  };

  return useMutation({
    mutationFn: useSubscriptionMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
  });
};
