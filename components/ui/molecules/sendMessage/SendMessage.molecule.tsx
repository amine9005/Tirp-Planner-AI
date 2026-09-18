"use client";
import { Send } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { Textarea } from "@/components/ui/atoms/textarea/textarea";
import { useAiSendMessage } from "@/hooks/submit/useAiSendMessage.hook";

interface Props {
  href: string;
}

const SendMessageMolecule = ({ href }: Props) => {
  const { isLoading, userMessage, onSend, setUserMessage } = useAiSendMessage();

  return (
    <div className="w-full relative border rounded-2xl shadow ">
      <Textarea
        placeholder="Plan a trip form London to Los Angles"
        className="w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none shadow-none"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      ></Textarea>

      <Link
        className={`absolute bottom-4 right-4 rounded-lg ${buttonVariants({ variant: isLoading ? "outline" : "default" })}`}
        href={href}
        onClick={() => onSend({ message: userMessage.trim() })}
      >
        <Send className={`size-5 ${isLoading ? "animate-bounce " : ""}`} />
      </Link>
    </div>
  );
};

export default SendMessageMolecule;
