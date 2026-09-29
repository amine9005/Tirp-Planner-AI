"use client";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";
import { useEffect } from "react";
import { useTripPlanHook } from "@/hooks/submit/useTripPlanSubmit.hook";

const ChatBoxAction = () => {
  const { isLoading, messages, userMessage, setUserMessage, onSend, isFinal } =
    useAiSendMessageHook();

  const { generateTripAndSaveTrip } = useTripPlanHook();

  useEffect(() => {
    generateTripAndSaveTrip();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinal]);

  return (
    <ChatBoxOrganism
      href={""}
      isLoading={isLoading}
      isFinal={isFinal}
      messages={messages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      onSend={onSend}
    />
  );
};

export default ChatBoxAction;
