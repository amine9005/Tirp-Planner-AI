"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import {
  displayTypes,
  HeroMediaFormType,
  videoSource,
} from "@/validations/hero.zod";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";
import { motion } from "framer-motion";
import UploadFileFieldInstant from "@/components/ui/molecules/upload-image-instant/UploadImageInstant.molecule";
import Upload3DModelField from "@/components/ui/molecules/upload-3D-model-field/Upload3DModelField.molecule";
import UploadVideoFieldInstant from "@/components/ui/molecules/upload-video-instant/UploadVideoInstant.molecule";
import { PATHS } from "@/lib/patths";
import { DeleteRoutes } from "@/helpers/utils.helper";

interface Props {
  form: HeroMediaFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const videoInputValues = {
  name: "videoUrl",
  labelTitle: "Video Source",
  type: "text",
  placeholder: "Video Url",
  autoComplete: "off",
};

const EditHeroMediaContent = ({ form, formName, handle_submit }: Props) => {
  const selectInputValues = {
    name: "displayType",
    labelTitle: "Display",
    options: displayTypes,
    placeholder: form.watch("displayType"),
    form: form,
  };

  const videoSourceInputValues = {
    name: "videoSource",
    labelTitle: "Video Source",
    options: videoSource,
    placeholder: form.watch("videoSource"),
    form: form,
  };

  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="displayType"
          control={form.control}
          render={({ field, fieldState }) => (
            <SelectField
              item={selectInputValues}
              field={field}
              fieldState={fieldState}
            />
          )}
        />
        <div className="relative mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: form.watch("displayType") === "Image" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`sticky top-0 w-full ${
              form.watch("displayType") === "Image" ? "block" : "hidden"
            }
            `}
          >
            <Controller
              name="imageUrl"
              control={form?.control}
              render={({ field, fieldState }) => (
                <UploadFileFieldInstant
                  field={field}
                  fieldState={fieldState}
                  text="Chose An Image"
                  limit={1}
                  imageUrl={PATHS.HERO_IMAGES}
                  deleteRoute={DeleteRoutes.DELETE_HERO_ROUTE}
                  form={form}
                  name="imageUrl"
                  imageRoute={"HERO IMAGE"}
                />
              )}
            />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: form.watch("displayType") === "Parallax" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`sticky top-0 w-full  ${
              form.watch("displayType") === "Parallax" ? "block" : "hidden"
            }
            `}
          >
            <Controller
              name="imageUrl"
              control={form?.control}
              render={({ field, fieldState }) => (
                <UploadFileFieldInstant
                  field={field}
                  fieldState={fieldState}
                  text="Chose An Image"
                  limit={1}
                  imageUrl={PATHS.HERO_IMAGES}
                  deleteRoute={DeleteRoutes.DELETE_HERO_ROUTE}
                  form={form}
                  name="imageUrl"
                  imageRoute={"HERO IMAGE"}
                />
              )}
            />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: form.watch("displayType") === "3D Model" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`sticky top-0 w-full  ${
              form.watch("displayType") === "3D Model" ? "block" : "hidden"
            }
            `}
          >
            <Controller
              name="model3D_Url"
              control={form?.control}
              render={({ field, fieldState }) => (
                <Upload3DModelField
                  field={field}
                  fieldState={fieldState}
                  text="Chose a GLB File To Upload"
                  limit={1}
                  form={form}
                  name="model3D_Url"
                />
              )}
            />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: form.watch("displayType") === "Video" ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`sticky top-0 w-full space-y-4  ${
              form.watch("displayType") === "Video" ? "block" : "hidden"
            }
            `}
          >
            <Controller
              name="videoSource"
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
                opacity: form.watch("videoSource") != "Upload" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`sticky top-0 w-full space-y-4  ${
                form.watch("videoSource") != "Upload" ? "block" : "hidden"
              }
            `}
            >
              <Controller
                name="videoUrl"
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
                opacity: form.watch("videoSource") === "Upload" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`sticky top-0 w-full space-y-4  ${
                form.watch("videoSource") === "Upload" ? "block" : "hidden"
              }
            `}
            >
              <Controller
                name="videoFileName"
                control={form?.control}
                render={({ field, fieldState }) => (
                  <UploadVideoFieldInstant
                    field={field}
                    fieldState={fieldState}
                    text="Upload Video"
                    limit={1}
                    form={form}
                    name="videoFileName"
                    videoRoute="HERO VIDEO"
                  />
                )}
              />{" "}
            </motion.div>
          </motion.div>
        </div>
      </FieldGroup>
    </form>
  );
};

export default EditHeroMediaContent;
