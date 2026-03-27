"use client";
import ContactMeFormCard from "@/components/ui/organisms/contact-me/ContactMeCard.organism";
import { useContactMe } from "@/hooks/forms/useContactMeForm.hook";
import { useContactMeSubmit } from "@/hooks/submit/useContactMeSubmit.hook";
import { useState } from "react";

const ContactMeAction = () => {
  const [filePath, setFilePath] = useState<FileList | null>(null);
  const form = useContactMe();
  const { handleSubmit } = form;
  const { loading, onSubmit } = useContactMeSubmit(filePath);

  const card = { title: "Contact Me", description: "" };
  const formName = "contact-me";
  return (
    <ContactMeFormCard
      form={form}
      card={card}
      formName={formName}
      loading={loading}
      filePath={filePath}
      setFilePath={setFilePath}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default ContactMeAction;
