import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  isLoading: boolean;
  isFinal: boolean;
  userMessage: string;
  setIsLoading: (value: boolean) => void;
  setIsFinal: (value: boolean) => void;
  setMessages: (value: MessageAISchemaType[]) => void;
  setUserMessage: (value: string) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  isLoading: false,
  isFinal: false,
  userMessage: "",
  setUserMessage: (value) => set({ userMessage: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setIsFinal: (value) => set({ isFinal: value }),
  setMessages: (value) => set({ messages: value }),
}));
