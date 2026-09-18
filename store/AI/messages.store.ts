import { MessageAISchemaType } from "@/validations/AI.zod";
import { create } from "zustand";

type MessagesState = {
  messages: MessageAISchemaType[] | [];
};

export const useAIMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  setMessages: (value: MessageAISchemaType[]) => set({ messages: value }),
}));
