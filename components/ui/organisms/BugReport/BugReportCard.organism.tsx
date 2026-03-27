"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import BugReportContent from "./BugReportContent.organism";
import { FormType, schemaType } from "@/validations/bugReport.zod";
import SubmitField from "@/components/ui/molecules/submit-field/SubmitField.molecule";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: FormType;
  card: Card;
  formName: string;
  handle_submit: (formData: schemaType) => void;
  handle_reset: () => void;
}

export function BugReportFormCard({
  form,
  card,
  formName,
  handle_submit,
  handle_reset,
}: Props) {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <BugReportContent
          form={form}
          formName={formName}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter>
        <SubmitField handle_reset={handle_reset} formName={formName} />
      </CardFooter>
    </Card>
  );
}
