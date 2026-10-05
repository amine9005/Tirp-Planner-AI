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
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post("/api/subscriptions/update", {
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
