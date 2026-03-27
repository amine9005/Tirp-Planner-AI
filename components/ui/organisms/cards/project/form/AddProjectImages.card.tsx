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
import { ProjectImageFormType } from "@/validations/project.zod";
import AddProjectImageContent from "@/components/ui/organisms/contents/add-project/AddProjectImages.content";
import { Button } from "@/components/ui/atoms/button/button";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: ProjectImageFormType;
  card: Card;
  previousStep: () => void;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
}

const AddProjectImageCard = ({
  form,
  card,
  formName,
  handle_submit,
  loading,
  previousStep,
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
        <AddProjectImageContent
          formName={formName}
          form={form}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-end items-center w-full gap-4">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => previousStep()}
          >
            Previous Step
          </Button>
          <LoadingSubmitButton loading={loading} formName={formName}>
            Next Step
          </LoadingSubmitButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AddProjectImageCard;
