"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent } from "react";
import UploadImageArray from "@/components/ui/organisms/upload/upload-image-array/UploadImageArray.organism";
import { ProjectImageFormType } from "@/validations/project.zod";

interface Props {
  form: ProjectImageFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const AddProjectImageContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <UploadImageArray
            dirPath="/projects/images/"
            imageRoute="PROJECT IMAGE"
            form={form}
            name={"projectImages"}
          />
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectImageContent;
