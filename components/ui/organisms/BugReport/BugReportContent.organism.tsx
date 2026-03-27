"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormType, schemaType } from "@/validations/bugReport.zod";
import TextAreaField from "@/components/ui/organisms/BugReport/fields/text-area-field/TextAreaField.molecule";
import InputField from "@/components/ui/organisms/BugReport/fields/input-field/InputField.molecule";

interface Props {
  form: FormType;
  handle_submit: (data: schemaType) => void;
  formName: string;
}

const inputFieldValues = {
  name: "title",
  labelTitle: "Title",
  type: "text",
  placeholder: "What issues are you experiencing in ",
  autoComplete: "off",
};

const textareaFieldValues = {
  name: "description",
  fieldLabel: "Description",
  placeholder: "place your description here",
  rows: 6,
  charLimits: 200,
  fieldDescription: "field description",
};

const BugReportContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={`form-${formName}`} onSubmit={form?.handleSubmit(handle_submit)}>
      <FieldGroup>
        <InputField form={form} item={inputFieldValues} />
        <TextAreaField form={form} item={textareaFieldValues} />
      </FieldGroup>
    </form>
  );
};

export default BugReportContent;
