"use client";
import { validateVideoFiles } from "@/validations/upload.validate";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import { ReactNode } from "react";
import UploadBase from "@/components/ui/molecules/upload-base/UploadBase.molecule";

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  // item?: Item;
  limit?: number;
  videoRoute?: "PROJECT VIDEO" | "HERO VIDEO";
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

const UploadVideoFieldInstant = ({
  form,
  name,
  text = "Chose File",
  limit,
  inLineIcon,
  videoRoute = "PROJECT VIDEO",
  fieldState,
}: Props) => {
  const { uploadFile, isPending } = useUploadSubmit();

  const setAndUpload = async (files: FileList | null) => {
    const path = await uploadFile(files, videoRoute);
    // console.log("path ", path);
    form.setValue(name, path);
    form.trigger();
  };

  const textFn = () => {
    return form.getValues(name) ? (form.getValues(name) as string) : text;
  };
  return (
    <UploadBase
      accept="video/*"
      name={name}
      isPending={isPending}
      validation={validateVideoFiles}
      setAndUpload={setAndUpload}
      fieldState={fieldState}
      limit={limit}
      text={textFn()}
      inLineIcon={inLineIcon}
    />
  );
};

export default UploadVideoFieldInstant;
