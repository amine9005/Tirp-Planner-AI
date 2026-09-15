import React from "react";
import SendMessageMolecule from "@/components/ui/molecules/sendMessage/SendMessage.molecule";

const ChatBoxOrganism = () => {
  return (
    <div>
      {/* Display Messages */}
      <section className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-end mt-2">
          <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
            Usr Msg
          </div>
        </div>
        <div className="flex justify-start mt-2">
          <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
            AI Msg
          </div>
        </div>
      </section>
      {/* User Input */}
      <section>
        <SendMessageMolecule href={""} />
      </section>
    </div>
  );
};

export default ChatBoxOrganism;
