import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  tripPlanString: string;
  isLoading: boolean;
  isFinal: boolean;
  success: boolean;
  userMessage: string;
  setIsLoading: (value: boolean) => void;
  setTripPlanString: (value: string) => void;
  setSuccess: (value: boolean) => void;
  setIsFinal: (value: boolean) => void;
  setMessages: (value: MessageAISchemaType[]) => void;
  setUserMessage: (value: string) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  isLoading: false,
  tripPlanString: "",
  isFinal: false,
  success: false,
  userMessage: "",
  setTripPlanString: (value) => set({ tripPlanString: value }),
  setSuccess: (value) => set({ success: value }),
  setUserMessage: (value) => set({ userMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setIsFinal: (value) => set({ isFinal: value }),
  setMessages: (value) => set({ messages: value }),
}));
