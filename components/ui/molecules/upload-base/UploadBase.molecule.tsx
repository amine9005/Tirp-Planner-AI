"use client";
import { Loader2Icon, UploadIcon } from "lucide-react";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { ReactNode } from "react";

interface Props {
  name: string;
  text?: string;
  limit?: number;
  accept?: string | undefined;
  isPending: boolean;
  index?: number;
  inLineIcon?: ReactNode;
  validation: (
    files: FileList | null,

    limit?: number | undefined,
  ) => FileList | null;
  setAndUpload: (file: FileList | null) => void;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}

const UploadBase = ({
  name,
  text = "Chose File",
  limit,
  inLineIcon,
  accept,
  validation,
  index = 0,
  setAndUpload,
  fieldState,
  isPending,
}: Props) => {
  const isValid = () => {
    if (Array.isArray(fieldState.error)) {
      if (fieldState.error[index]) {
        return true;
      }
      return false;
    }
    if (fieldState.error) {
      return true;
    }
    return false;
  };
  // console.log("isPending: ", isPending);
  return (
    <Field className="mt-2 max-w-4/5" data-invalid={isValid()}>
      <FieldLabel
        className="flex flex-wrap justify-start"
        htmlFor={`image-${name}`}
      >
        <div className="flex flex-wrap overflow-x-hidden justify-start items-center gap-2 hover:cursor-pointer">
          <input
            type="file"
            accept={accept}
            multiple
            onChange={(e) => setAndUpload(validation(e.target.files, limit))}
            id={`image-${name}`}
            hidden
            disabled={isPending}
          />
          {isPending ? (
            <div className="flex items-center justify-center h-10 w-16 p-2 hover:cursor-pointer border border-white rounded-lg">
              <Loader2Icon className=" animate-spin" />
            </div>
          ) : !inLineIcon ? (
            <UploadIcon className="h-10 w-16 p-2 hover:cursor-pointer border border-white rounded-lg" />
          ) : (
            inLineIcon
          )}
          <span className="max-w-full">{text}</span>
        </div>
      </FieldLabel>

      {fieldState.invalid && (
        <FieldError
          errors={[
            Array.isArray(fieldState.error)
              ? fieldState.error[index]
              : fieldState.error,
          ]}
        />
      )}
    </Field>
  );
};

export default UploadBase;
