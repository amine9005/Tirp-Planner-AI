"use client";
import SendMessageMolecule from "@/components/ui/molecules/sendMessage/SendMessage.molecule";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import { P } from "../../atoms/text/Text";

const ChatBoxOrganism = () => {
  const { messages } = useAIMessagesStore();

  return (
    <div>
      {/* Display Messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.length > 0 ? (
          messages.map((message, index) =>
            message.role === "user" ? (
              <div key={index} className="flex justify-end mt-2">
                <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                  {message.message}
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-start mt-2">
                <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                  {message.message}
                </div>
              </div>
            ),
          )
        ) : (
          <P size={"lg"}>Let&apos;s get started!, Where do you want to go ?</P>
        )}
      </section>
      {/* User Input */}
      <section>
        <SendMessageMolecule href={""} />
      </section>
    </div>
  );
};

export default ChatBoxOrganism;
