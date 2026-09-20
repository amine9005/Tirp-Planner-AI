import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setMessages: (value: MessageAISchemaType[]) => void;
  userMessage: string;
  setUserMessage: (value: string) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  isLoading: false,
  userMessage: "",
  setUserMessage: (value) => set({ userMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setMessages: (value) => set({ messages: value }),
}));
