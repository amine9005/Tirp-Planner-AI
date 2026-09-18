import { useAIMessagesStore } from "@/store/AI/messages.store";
import { useAI_Mutation } from "../mutations/useAI-ModelMutation.hook";
import { useRef, useState } from "react";
import { MessageAISchemaType } from "@/validations/AI.zod";

export function useAiSendMessage() {
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const messages = useAIMessagesStore((state) => state.messages);
  const setMessages = useAIMessagesStore((state) => state.setMessages);

  const messageArrayRef = useRef<MessageAISchemaType[]>(messages);
  const [userMessage, setUserMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async ({ message }: { message: string }) => {
    if (isLoading) return;

    setIsLoading(true);

    messageArrayRef.current.push({ role: "user", message });
    setMessages(messageArrayRef.current);

    setUserMessage("");

    try {
      const resp = await sendMessage(messageArrayRef.current);

      const aiMsg = JSON.parse(
        resp.data.message.slice(
          resp.data.message.indexOf("{") - 1,
          resp.data.message.indexOf("}") + 1,
        ),
      );

      messageArrayRef.current.push({
        role: "assistant",
        message: aiMsg.resp,
      });
    } catch (error) {
      console.log(error);
      messageArrayRef.current.push({
        role: "assistant",
        message: "Something went wrong please try again!",
      });
    }

    setMessages(messageArrayRef.current);
    setIsLoading(false);
  };

  return { onSend, userMessage, isLoading, setUserMessage };
}
