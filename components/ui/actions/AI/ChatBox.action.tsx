"use client";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";

const ChatBoxAction = () => {
  const { isLoading, messages, userMessage, setUserMessage, onSend } =
    useAiSendMessageHook();

  return (
    <ChatBoxOrganism
      isLoading={isLoading}
      messages={messages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      onSend={onSend}
    />
  );
};

export default ChatBoxAction;
