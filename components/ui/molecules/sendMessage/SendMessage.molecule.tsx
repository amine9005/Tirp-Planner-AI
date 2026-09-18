"use client";
import { Send } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { Textarea } from "@/components/ui/atoms/textarea/textarea";
import { useAI_Mutation } from "@/hooks/mutations/useAI-ModelQuery.hook";
import { useRef, useState } from "react";
import { MessageAISchemaType } from "@/validations/AI.zod";

interface Props {
  href: string;
}

const SendMessageMolecule = ({ href }: Props) => {
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const messageArrayRef = useRef<MessageAISchemaType[]>([]);
  const [userMessage, setUserMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async ({ message }: { message: string }) => {
    if (isLoading) return;

    setIsLoading(true);

    messageArrayRef.current.push({ role: "user", message });

    const resp = await sendMessage(messageArrayRef.current);
    setIsLoading(false);

    messageArrayRef.current.push({
      role: "assistant",
      message: resp.data.message,
    });
  };

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
        onClick={() => onSend({ message: userMessage })}
      >
        <Send className={`size-5 ${isLoading ? "animate-bounce " : ""}`} />
      </Link>
    </div>
  );
};

export default SendMessageMolecule;
