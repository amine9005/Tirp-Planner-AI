"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { FormEvent } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import { ContactMeFormType } from "@/validations/ContactMe.zod";
import ContactMeContent from "./ContactMeContent.organism";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: ContactMeFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
  filePath: FileList | null;
  setFilePath: (files: FileList | null) => void;
}

const ContactMeFormCard = ({
  form,
  card,
  formName,
  handle_submit,
  loading,
  filePath,
  setFilePath,
}: Props) => {
  return (
    <Card className="w-full sm:max-w-xl">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>{card.title}</H2>
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactMeContent
          formName={formName}
          form={form}
          handle_submit={handle_submit}
          filePath={filePath}
          setFilePath={setFilePath}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center w-full">
          <LoadingSubmitButton
            width={"full"}
            loading={loading}
            formName={formName}
          >
            Send
          </LoadingSubmitButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContactMeFormCard;
