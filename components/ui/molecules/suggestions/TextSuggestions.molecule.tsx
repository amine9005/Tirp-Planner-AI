"use client";
import { P } from "@/components/ui/atoms/text/Text";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import { Suggestions } from "@/types/general.types";

const TextSuggestionsMolecule = (suggestions: Suggestions[]) => {
  const setUserMessage = useAIMessagesStore((state) => state.setUserMessage);

  return (
    <div className="flex gap-4">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border rounded-full p-2.5 cursor-pointer hover:bg-primary/25 hover:scale-105 transition-transform duration-200"
          onClick={() => setUserMessage(item.title)}
        >
          {item.icon}
          <P className="text-sm ">{item.title}</P>
        </div>
      ))}
    </div>
  );
};

export default TextSuggestionsMolecule;
