"use client";
import { Button } from "@/components/ui/atoms/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/atoms/dialog/dialog";
import { UseFormReturn } from "react-hook-form";
import VideoUploadDisplayContent from "@/components/ui/organisms/contents/video-upload-display/VideoUploadDisplay.content";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  uploadRoute: "HERO VIDEO" | "PROJECT VIDEO";
  name: string;
  index: number;
  videoFileName: string;
  videoUrl: string;
  videoSource: string;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}

const VideoUploadDisplayDialog = ({
  title,
  form,
  name,
  index,
  uploadRoute,
  videoSource,
  videoFileName,
  videoUrl,
  fieldState,
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Field className="mt-2 max-w-4/5" data-invalid={isValid()}>
          <FieldLabel
            className="flex flex-wrap justify-start"
            htmlFor={`video-${name}`}
          >
            {videoUrl || videoFileName ? (
              <div className="flex justify-center items-center">
                <>{videoSource} | </>
                {videoSource === "Upload" ? (
                  <> {videoFileName} </>
                ) : (
                  <>{videoUrl}</>
                )}
              </div>
            ) : (
              "Upload A Video"
            )}
          </FieldLabel>

          {fieldState.invalid && (
            <FieldError
              errors={[
                Array.isArray(fieldState.error)
                  ? fieldState.error[index]
                    ? { message: "A Video Source Is Required" }
                    : undefined
                  : fieldState.error,
              ]}
            />
          )}
        </Field>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center my-4">
          <VideoUploadDisplayContent
            form={form}
            uploadRoute={uploadRoute}
            name={name}
            index={index}
          />
        </div>
        <DialogFooter>
          <DialogClose
            className="flex w-full justify-center items-center"
            asChild
          >
            <Button width={"fit"} variant={"outline"}>
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VideoUploadDisplayDialog;
