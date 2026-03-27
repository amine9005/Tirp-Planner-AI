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
import { Button } from "@/components/ui/atoms/button/button";
import AddProjectVideoContent from "@/components/ui/organisms/contents/add-project/AddProjectVideos.content";
import { ProjectVideoFormType } from "@/validations/project.zod";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: ProjectVideoFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
  previousStep: () => void;
}

const AddProjectVideoCard = ({
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
        <AddProjectVideoContent
          formName={formName}
          form={form}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-end items-center w-full gap-4">
          <Button
            type="button"
            onClick={() => previousStep()}
            variant={"outline"}
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

export default AddProjectVideoCard;
