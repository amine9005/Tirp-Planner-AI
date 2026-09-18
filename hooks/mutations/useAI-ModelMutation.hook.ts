"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { MessageAISchemaType } from "@/validations/AI.zod";

export const useAI_Mutation = () => {
  const susePromptAI_RequestFn = async (messages: MessageAISchemaType[]) => {
    const response = await axiosInstance.post("/api/ai-model/google", {
      messages,
    });
    return response;
  };

  return useMutation({
    mutationFn: susePromptAI_RequestFn,
  });
};
