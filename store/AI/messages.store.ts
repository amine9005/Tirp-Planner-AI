import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[];
  setMessages: (value: MessageAISchemaType[]) => void;
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  setMessages: (value) => set({ messages: value }),
}));
