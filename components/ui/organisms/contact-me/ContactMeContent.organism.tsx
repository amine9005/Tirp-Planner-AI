"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import { ContactMeFormType } from "@/validations/ContactMe.zod";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import UploadFileMolecule from "@/components/ui/molecules/upload-image/UploadImage.molecule";

interface Props {
  form: ContactMeFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
  filePath: FileList | null;
  setFilePath: (files: FileList | null) => void;
}

const firstNameInputValues = {
  name: "firstName",
  labelTitle: "First Name",
  type: "text",
  placeholder: "John",
  autoComplete: "on",
};

const lastNameInputValues = {
  name: "lastName",
  labelTitle: "Last Name",
  type: "text",
  placeholder: "Smith",
  autoComplete: "on",
};

const emailInputValues = {
  name: "email",
  labelTitle: "Email",
  type: "email",
  placeholder: "John@mail.com ",
  autoComplete: "off",
};

const subjectInputValues = {
  name: "subject",
  labelTitle: "Subject",
  type: "text",
  placeholder: "Create for me a 3d model... ",
  autoComplete: "off",
};

const descriptionInputValues = {
  name: "description",
  labelTitle: "Description",
  placeholder: "Use the reference images to create a 3D model for a movie....",
  autoComplete: "off",
  charLimits: 50,
};
const ContactMeContent = ({
  form,
  formName,
  handle_submit,
  filePath,
  setFilePath,
}: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 ">
          <Controller
            name="firstName"
            control={form?.control}
            render={({ field, fieldState }) => (
              <InputField
                field={field}
                fieldState={fieldState}
                item={firstNameInputValues}
              />
            )}
          />
          <Controller
            name="lastName"
            control={form?.control}
            render={({ field, fieldState }) => (
              <InputField
                field={field}
                fieldState={fieldState}
                item={lastNameInputValues}
              />
            )}
          />
        </div>
        <Controller
          name="email"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={emailInputValues}
            />
          )}
        />{" "}
        <Controller
          name="subject"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={subjectInputValues}
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
        <div className="flex flex-wrap justify-between items-center gap-3 mt-2">
          <UploadFileMolecule
            filePath={filePath}
            setFilePath={setFilePath}
            index={1}
          />
        </div>
      </FieldGroup>
    </form>
  );
};

export default ContactMeContent;
