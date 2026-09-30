import { TripPlanType } from "@/types/create-trip.types";
import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  tripPlan: TripPlanType | null;
  isLoading: boolean;
  isFinal: boolean;
  success: boolean;
  userMessage: string;
  setIsLoading: (value: boolean) => void;
  setTripPlan: (value: TripPlanType) => void;
  setSuccess: (value: boolean) => void;
  setIsFinal: (value: boolean) => void;
  setMessages: (value: MessageAISchemaType[]) => void;
  setUserMessage: (value: string) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  isLoading: false,
  tripPlan: null,
  isFinal: false,
  success: false,
  userMessage: "",
  setTripPlan: (value) => set({ tripPlan: value }),
  setSuccess: (value) => set({ success: value }),
  setUserMessage: (value) => set({ userMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setIsFinal: (value) => set({ isFinal: value }),
  setMessages: (value) => set({ messages: value }),
}));
