"use client";
import { Send } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { Textarea } from "@/components/ui/atoms/textarea/textarea";

interface Props {
  href: string;
}

const onSend = () => {};

const SendMessageMolecule = ({ href }: Props) => {
  return (
    <div className="w-full relative border rounded-2xl shadow ">
      <Textarea
        placeholder="Plan a trip form London to Los Angles"
        className="w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none shadow-none"
      ></Textarea>
      <Link
        className={`absolute bottom-4 right-4 rounded-lg ${buttonVariants({ variant: "default" })}`}
        href={href}
        onClick={onSend}
      >
        <Send className="size-5 " />
      </Link>
    </div>
  );
};

export default SendMessageMolecule;
