import { Button } from "@/components/ui/atoms/button/button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import UploadBase from "@/components/ui/molecules/upload-base/UploadBase.molecule";
import { useUploadSubmit } from "@/hooks/submit/useUploadSubmit.hook";
import { UploadRoutes, validateImages } from "@/validations/upload.validate";
import ImageThumbnailAtom from "@/components/ui/atoms/image-thumbnail/ImageThumbnail.atom";
import { useDeleteMutation } from "@/hooks/mutations/useProjectMutation.hook";
import { DeleteRoutes } from "@/helpers/utils.helper";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
  dirPath: string;
  imageRoute: UploadRoutes;
}

const UploadImageArray = ({ form, name, imageRoute, dirPath = "" }: Props) => {
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
        deleteRoute: DeleteRoutes.DELETE_PROJECT_IMAGE,
      });
    }

    const path = await uploadFile(files, imageRoute);
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
        deleteRoute: DeleteRoutes.DELETE_PROJECT_IMAGE,
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
      : "Upload New Image";
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
                    accept="image/*"
                    name={item.id}
                    isPending={isPending}
                    validation={validateImages}
                    setAndUpload={(file) => setAndUpload(file, index)}
                    fieldState={fieldState}
                    limit={1}
                    index={index}
                    text={textFn(index)}
                    inLineIcon={
                      textFn(index) !== "Upload New Image" ? (
                        <ImageThumbnailAtom
                          src={dirPath + textFn(index)}
                          alt={"image not found"}
                        />
                      ) : null
                    }
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
        Add New image <PlusIcon className="size-6 rounded-full" />
      </Button>
    </div>
  );
};

export default UploadImageArray;
