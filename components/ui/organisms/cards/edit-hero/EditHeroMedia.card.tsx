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
import { HeroMediaFormType } from "@/validations/hero.zod";
import EditHeroMediaContent from "../../contents/edit-hero/EditHeroMedia.content";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: HeroMediaFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
}

const EditHeroMediaCard = ({
  form,
  card,
  formName,
  handle_submit,
  loading,
}: Props) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>{card.title}</H2>
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <EditHeroMediaContent
          form={form}
          formName={formName}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center w-full">
          <LoadingSubmitButton
            width={"full"}
            loading={loading}
            formName={formName}
          >
            Update Hero Section
          </LoadingSubmitButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EditHeroMediaCard;
