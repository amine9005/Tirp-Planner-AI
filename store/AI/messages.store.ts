import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  setMessages: (value: MessageAISchemaType[]) => void;
  userMessage: string;
  setUserMessage: (value: string) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  userMessage: "",
  setUserMessage: (value) => set({ userMessage: value }),
  setMessages: (value) => set({ messages: value }),
}));
