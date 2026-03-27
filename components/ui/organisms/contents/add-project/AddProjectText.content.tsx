"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import { ProjectTextFormType } from "@/validations/project.zod";

interface Props {
  form: ProjectTextFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const titleInputValues = {
  name: "title",
  labelTitle: "Title",
  type: "text",
  placeholder: "Project Title...",
  autoComplete: "off",
};
const descriptionInputValues = {
  name: "description",
  labelTitle: "Description",
  placeholder: "Describe the project...",
  autoComplete: "off",
  charLimits: 30,
};
const AddProjectTextContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="title"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={titleInputValues}
            />
          )}
        />

        <Controller
          name="description"
          control={form?.control}
          render={({ field, fieldState }) => (
            <TextareaField
              field={field}
              fieldState={fieldState}
              item={descriptionInputValues}
            />
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default AddProjectTextContent;
