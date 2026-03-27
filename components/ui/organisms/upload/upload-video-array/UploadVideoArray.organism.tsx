import { Button } from "@/components/ui/atoms/button/button";
import { PlusIcon } from "lucide-react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import VideoUploadDisplayDialog from "@/components/ui/organisms/dialog/video-upload-display/VideoUploadDisplay.dialog";
import { DeleteRoutes } from "@/helpers/utils.helper";
import DeleteItemMolecule from "@/components/ui/molecules/delete-item/DeleteItem.molecule";
const UploadVideoArray = ({
  form,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
}) => {
  const { fields, append, remove } = useFieldArray({
    control: form?.control,
    name: name,
  });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ul className="w-full ">
        {fields.map((item, index) => (
          <li key={item.id}>
            <div className="flex w-full flex-wrap justify-between items-center">
              <Controller
                name={"projectVideos"}
                control={form?.control}
                render={({ fieldState }) => (
                  <VideoUploadDisplayDialog
                    form={form}
                    title={"Add New Video"}
                    uploadRoute="PROJECT VIDEO"
                    name={"projectVideos"}
                    index={index}
                    videoFileName={form.watch(`${name}.${index}.fileName`)}
                    videoUrl={form.watch(`${name}.${index}.url`)}
                    videoSource={form.watch(`${name}.${index}.source`)}
                    fieldState={fieldState}
                  />
                )}
              />
              <DeleteItemMolecule
                deleteRoute={DeleteRoutes.DELETE_PROJECT_VIDEO}
                index={index}
                remove={remove}
                id={form.getValues(`${name}.${index}._id`)}
              />
            </div>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        variant={"outline"}
        className="mt-4 p-2"
        onClick={() => append({ source: "YouTube", url: "", fileName: "" })}
      >
        Add New Video <PlusIcon className="size-6 rounded-full" />
      </Button>
    </div>
  );
};

export default UploadVideoArray;
