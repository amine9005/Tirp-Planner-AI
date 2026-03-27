"use client";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";

import { FieldValues, UseFormReturn } from "react-hook-form";

import UploadBase from "../upload-base/UploadBase.molecule";
import { validate3DModelFiles } from "@/validations/upload.validate";
import { ReactNode } from "react";

// interface Item {
//   name: string;
//   labelTitle?: React.ReactNode;
//   type?: string;
//   placeholder?: string;
//   autoComplete: string;
// }
interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  // item?: Item;
  limit?: number;
  field: FieldValues;
  inLineIcon?: ReactNode;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}

const Upload3DModelField = ({
  form,
  name,
  text = "Upload 3D Model",
  limit,
  inLineIcon,
  fieldState,
}: Props) => {
  const { uploadFile, isPending } = useUploadSubmit();

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadFile(files, "3D MODEL");
    // console.log("path ", path);
    form.setValue(name, path);
    form.trigger();
  };

  const textFn = () => {
    return form.getValues(name) ? (form.getValues(name) as string) : text;
  };
  return (
    <UploadBase
      name={name}
      isPending={isPending}
      validation={validate3DModelFiles}
      setAndUpload={setAndUpload}
      fieldState={fieldState}
      limit={limit}
      text={textFn()}
      inLineIcon={inLineIcon}
    />
  );
};

export default Upload3DModelField;
