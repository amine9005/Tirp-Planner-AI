"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent } from "react";
import { ProjectModelFormType } from "@/validations/project.zod";
import UploadModelArray from "@/components/ui/organisms/upload/upload-model-array/UploadModelArray.organism";

interface Props {
  form: ProjectModelFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const AddProjectModelContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <UploadModelArray
            uploadRoute="3D MODEL"
            form={form}
            name={"projectModels"}
          />
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectModelContent;
