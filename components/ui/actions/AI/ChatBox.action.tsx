"use client";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";
import { useGenerateTripHook } from "@/hooks/mutations/useAiGenerateTripMutation.hook";
import { useEffect } from "react";

const ChatBoxAction = () => {
  const { isLoading, messages, userMessage, setUserMessage, onSend, isFinal } =
    useAiSendMessageHook();

  const { generateTrip } = useGenerateTripHook();

  useEffect(() => {
    generateTrip({ messages, isFinal });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinal]);

  return (
    <ChatBoxOrganism
      href={""}
      isLoading={isLoading}
      messages={messages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      onSend={onSend}
    />
  );
};

export default ChatBoxAction;
