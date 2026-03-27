"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { FormEvent, useState } from "react";
import {
  ProjectSettingFormType,
  ThumbnailType,
} from "@/validations/project.zod";
import { Controller } from "react-hook-form";
import SelectField from "@/components/ui/molecules/select-field/SelectField.molecule";
import DynamicSelectField from "@/components/ui/molecules/dynamic-select-field/DynamicSelectField.molecule";
import { useAddProjectStore } from "@/store/admin/addProject.store";
import FormsCheckBox from "@/components/ui/molecules/forms-checkbox/FormsCheckBox.molecule";

interface Props {
  form: ProjectSettingFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const AddProjectSettingsContent = ({
  form,
  formName,
  handle_submit,
}: Props) => {
  const projectImages = useAddProjectStore((state) => state.projectImages);
  const projectModels = useAddProjectStore((state) => state.projectModels);
  const projectVideos = useAddProjectStore((state) => state.projectVideos);
  const [thumbnailOptions, setThumbnailOptions] = useState<string[]>(
    projectImages ? projectImages : [],
  );

  const thumbnailTypeInputValues = {
    name: `thumbnail.type`,
    labelTitle: "Thumbnail Type",
    options: ThumbnailType,
    placeholder: form.watch(`thumbnail.type`),
    form: form,
  };

  const updateValues = (value: string) => {
    console.log("project videos: ", projectVideos);
    if (value === "Image") {
      setThumbnailOptions(projectImages ? projectImages : []);
      form.setValue("thumbnail.source", "Upload");
    } else if (value === "Video") {
      const videoOptions = projectVideos?.map((value) => {
        return value.fileName
          ? (((value.source as string) + " | " + value.fileName) as string)
          : (((value.source as string) + " | " + value.url) as string);
      });
      // console.log("videoOptions: ", videoOptions);

      setThumbnailOptions(videoOptions ? videoOptions : []);
    } else if (value === "Model") {
      form.setValue("thumbnail.source", "Upload");
      setThumbnailOptions(projectModels ? projectModels : []);
    }
  };

  const updateFileOrUrl = (value: string) => {
    if (!value) {
      return;
    }

    if (form.getValues("thumbnail.type") === "Video") {
      const values = value.split(" | ");
      form.setValue("thumbnail.source", values[0]);
      // console.log("source ", values[0]);
      form.setValue("thumbnail.fileOrUrl", values[1]);
      // console.log("url ", values[1]);
    } else {
      form.setValue("thumbnail.source", "Upload");
      // console.log("source ", values[0]);
      form.setValue("thumbnail.fileOrUrl", value);
    }

    form.trigger();
  };

  const fileOrUrlInputValues = {
    name: `thumbnail.fileOrUrl`,
    labelTitle: "Thumbnail File Or Url",
    options: [],
    placeholder: form.watch(`thumbnail.fileOrUrl`),
    form: form,
  };

  const isFeaturedValues = {
    labelTitle: "Feature This Project",
    form: form,
  };

  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <div className="flex flex-col justify-center items-start">
          <FormsCheckBox
            checkClassName="size-5"
            checkFor="isFeatured"
            values={isFeaturedValues}
            className="mt-4"
          />
          <div className="flex flex-col justify-center items-start w-full mt-5 space-y-3">
            <Controller
              name="thumbnail.type"
              control={form?.control}
              render={({ field, fieldState }) => (
                <SelectField
                  field={field}
                  fieldState={fieldState}
                  item={thumbnailTypeInputValues}
                  onSelectChange={(e) => {
                    updateValues(e);
                    form.setValue("thumbnail.type", e);
                    form.setValue("thumbnail.fileOrUrl", "");
                  }}
                />
              )}
            />
            <Controller
              name="thumbnail.fileOrUrl"
              control={form?.control}
              render={({ field, fieldState }) => (
                <DynamicSelectField
                  field={field}
                  fieldState={fieldState}
                  item={fileOrUrlInputValues}
                  values={thumbnailOptions}
                  onSelectChange={(e) => {
                    updateFileOrUrl(e);
                  }}
                />
              )}
            />
          </div>
        </div>
      </FieldGroup>
    </form>
  );
};

export default AddProjectSettingsContent;
