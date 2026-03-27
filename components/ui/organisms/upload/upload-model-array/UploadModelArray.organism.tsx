import { Button } from "@/components/ui/atoms/button/button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import UploadBase from "@/components/ui/molecules/upload-base/UploadBase.molecule";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import {
  UploadRoutes,
  validate3DModelFiles,
} from "@/validations/upload.validate";
import { DeleteRoutes } from "@/helpers/utils.helper";
import { useDeleteMutation } from "@/hooks/mutations/useProjectMutation.hook";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  dirPath?: string;
  uploadRoute: UploadRoutes;
}

const UploadModelArray = ({ form, name, uploadRoute }: Props) => {
  const { uploadFile, isPending } = useUploadSubmit();
  const { mutateAsync: deleteImage } = useDeleteMutation();

  const { fields, append, remove, update } = useFieldArray({
    control: form?.control,
    name: name,
  });

  const setAndUpload = async (files: FileList | null, index: number) => {
    if (
      form.getValues(name)[index] &&
      typeof form.getValues(name)[index] !== typeof {}
    ) {
      const preImage = form.getValues(name)[index] as string;
      await deleteImage({
        id: preImage,
        deleteRoute: DeleteRoutes.DELETE_PROJECT_MODEL,
      });
    }
    const path = await uploadFile(files, uploadRoute);
    update(index, path);
  };

  const removeAndDelete = async (index: number) => {
    if (
      form.getValues(name)[index] &&
      typeof form.getValues(name)[index] !== typeof {}
    ) {
      const preImage = form.getValues(name)[index] as string;
      await deleteImage({
        id: preImage,
        deleteRoute: DeleteRoutes.DELETE_PROJECT_MODEL,
      });
      remove(index);
    } else {
      remove(index);
    }
  };

  const textFn = (index: number) => {
    return form.getValues(name)[index] &&
      typeof form.getValues(name)[index] !== typeof {}
      ? (form.getValues(name)[index] as string)
      : "Upload New 3D Model (GLB File Only)";
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="w-full ">
        {fields.map((item, index) => (
          <li key={item.id}>
            <div className="flex w-full flex-wrap justify-between items-center">
              <Controller
                name={name}
                control={form?.control}
                render={({ fieldState }) => (
                  <UploadBase
                    name={item.id}
                    isPending={isPending}
                    validation={validate3DModelFiles}
                    setAndUpload={(file) => setAndUpload(file, index)}
                    fieldState={fieldState}
                    limit={1}
                    index={index}
                    text={textFn(index)}
                  />
                )}
              />
              <Button
                width={"fit"}
                type="button"
                className="rounded-full p-2"
                variant={"destructive_outline"}
                onClick={() => removeAndDelete(index)}
              >
                <Trash2Icon className="size-6" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        variant={"outline"}
        className="mt-4 p-2"
        onClick={() => append({})}
      >
        Add New Model <PlusIcon className="size-6 rounded-full" />
      </Button>
    </div>
  );
};

export default UploadModelArray;
