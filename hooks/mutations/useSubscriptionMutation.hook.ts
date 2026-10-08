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

export const useGetBillingPortalHook = () => {
  const queryClient = useQueryClient();
  const useGetBillingPortalHookFn = async ({
    referenceId,
    returnUrl,
  }: {
    referenceId: string;
    returnUrl: string;
  }) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post("/api/subscriptions/portal", {
      referenceId,
      returnUrl,
    });
    return response;
  };

  return useMutation({
    mutationFn: useGetBillingPortalHookFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portal"] });
    },
  });
};

export const useRestoreSubscriptionHook = () => {
  const queryClient = useQueryClient();
  const useRestoreSubscriptionHookHookFn = async ({
    referenceId,
    subscriptionId,
  }: {
    referenceId: string;
    subscriptionId: string;
  }) => {
    // console.log("subscription details", plan, successUrl, cancelUrl, returnUrl);

    const response = await axiosInstance.post("/api/subscriptions/restore", {
      referenceId,
      subscriptionId,
    });
    return response;
  };

  return useMutation({
    mutationFn: useRestoreSubscriptionHookHookFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
    },
  });
};
