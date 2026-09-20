import { MessageAISchemaType } from "@/validations/AI.zod";
import { Suggestions } from "./general.types";

export interface LoadingStateType {
  isLoading: boolean;
}

export interface DisplayMessagesType {
  messages: MessageAISchemaType[];
}

export interface SendMessageType {
  href: string;
  userMessage: string;
  onSend: ({ message }: { message: string }) => void;
  setUserMessage: (message: string) => void;
}

export interface onSendType {
  onSend: ({ message }: { message: string }) => void;
}

export interface SuggestionsType {
  suggestions: Suggestions[];
  onSend: ({ message }: { message: string }) => void;
}

export interface ChatProgressUI {
  ui: "budget" | "groupSize" | "TripDuration" | "Final";
}

export interface SelectByIconType {
  id: number;

  title: string;

  desc: string;

  icon: string;
  color?: string;

  prompt: string;
}
