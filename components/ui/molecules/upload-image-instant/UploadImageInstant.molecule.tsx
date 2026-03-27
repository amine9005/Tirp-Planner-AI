"use client";
import { useTmpLogoStore } from "@/store/admin/logo.store";
import { validateImages } from "@/validations/upload.validate";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import UploadBase from "@/components/ui/molecules/upload-base/UploadBase.molecule";
import { ReactNode } from "react";
import Image from "next/image";
import { useDeleteMutation } from "@/hooks/mutations/useProjectMutation.hook";

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  text?: string;
  limit?: number;
  imageUrl?: string;
  inLineIcon?: ReactNode;
  field: FieldValues;
  imageRoute?: "LOGO" | "PROJECT IMAGE" | "HERO IMAGE";
  deleteRoute: string;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}

const UploadImageFieldInstant = ({
  form,
  name,
  inLineIcon,
  text = "Chose An Image",
  limit,
  imageUrl = "",
  deleteRoute,
  imageRoute = "LOGO",
  fieldState,
}: Props) => {
  const { uploadFile, isPending } = useUploadSubmit();
  const { mutateAsync: deleteImage } = useDeleteMutation();
  const setLogoPath = useTmpLogoStore((state) => state.setImagePath);

  const setAndUpload = async (files: FileList | null) => {
    const preImage = form.getValues(name) as string;
    if (preImage) {
      try {
        await deleteImage({ deleteRoute: deleteRoute, id: preImage });
      } catch (err) {
        console.log(err);
      }
    }
    const path = await uploadFile(files, imageRoute);
    form.setValue(name, path);
    setLogoPath(path);
  };

  const textFn = () => {
    return form.getValues(name) ? (form.getValues(name) as string) : text;
  };

  const currentIcon = (): ReactNode | null => {
    if (form.getValues(name)) {
      return (
        <Image
          src={
            form.getValues(name)
              ? ((imageUrl + form.getValues(name)) as string)
              : ""
          }
          alt="Project Image"
          width={64}
          height={40}
        />
      );
    }
    return null;
  };

  return (
    <UploadBase
      accept="image/*"
      name={name}
      isPending={isPending}
      validation={validateImages}
      setAndUpload={setAndUpload}
      fieldState={fieldState}
      limit={limit}
      text={textFn()}
      inLineIcon={inLineIcon ? inLineIcon : currentIcon()}
    />
  );
};

export default UploadImageFieldInstant;
