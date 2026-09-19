import { MessageAISchemaType } from "@/validations/AI.zod";

export interface LoadingStateType {
  isLoading: boolean;
}

export interface DisplayMessagesType {
  messages: MessageAISchemaType[] | undefined;
}

export interface SendMessageType {
  href: string;
  userMessage: string;
  onSend: ({ message }: { message: string }) => void;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
}
