import { motion } from "framer-motion";
import { Controller, UseFormReturn } from "react-hook-form";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";
import UploadVideoFieldInstant from "@/components/ui/molecules/upload-video-instant/UploadVideoInstant.molecule";
import { videoSource } from "@/validations/hero.zod";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";

const videoInputValues = {
  name: "videoUrl",
  labelTitle: "Video Source",
  type: "text",
  placeholder: "Video Url",
  autoComplete: "off",
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  uploadRoute: "HERO VIDEO" | "PROJECT VIDEO";
  index: number;
  name: string;
}

const VideoUploadDisplayContent = ({
  form,
  uploadRoute,
  index,
  name,
}: Props) => {
  const videoSourceInputValues = {
    name: `${name}.${index}.source`,
    labelTitle: "Video Source",
    options: videoSource,
    placeholder: form.watch(`${name}.${index}.source`),
    form: form,
  };
  return (
    <div className="w-full space-y-3">
      <Controller
        name={`${name}.${index}.source`}
        control={form.control}
        render={({ field, fieldState }) => (
          <SelectField
            item={videoSourceInputValues}
            field={field}
            fieldState={fieldState}
          />
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: form.watch(`${name}.${index}.source`) != "Upload" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 w-full space-y-4  ${
          form.watch(`${name}.${index}.source`) != "Upload" ? "block" : "hidden"
        }
            `}
      >
        <Controller
          name={`${name}.${index}.url`}
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={videoInputValues}
            />
          )}
        />{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: form.watch(`${name}.${index}.source`) === "Upload" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 w-full space-y-4  ${
          form.watch(`${name}.${index}.source`) === "Upload"
            ? "block"
            : "hidden"
        }
            `}
      >
        <Controller
          name={`${name}.${index}.fileName`}
          control={form?.control}
          render={({ field, fieldState }) => (
            <UploadVideoFieldInstant
              field={field}
              fieldState={fieldState}
              text="Upload Video"
              limit={1}
              form={form}
              name={`${name}.${index}.fileName`}
              videoRoute={uploadRoute}
            />
          )}
        />{" "}
      </motion.div>
    </div>
  );
};

export default VideoUploadDisplayContent;
