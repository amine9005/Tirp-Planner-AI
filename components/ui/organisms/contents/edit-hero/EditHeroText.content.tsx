"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import { HeroTextFormType } from "@/validations/hero.zod";
import TextareaField from "@/components/ui/molecules/textarea-field/TextareaField.molecule";
import ColorPickerMolecule from "@/components/ui/molecules/color-picker/ColorPicker.molecule";
import ColorfulLabelAtom from "@/components/ui/atoms/colorful-label/ColorfulLabel.atom";

interface Props {
  form: HeroTextFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const fullNameInputValues = {
  name: "fullName",
  labelTitle: "Full Name",
  type: "text",
  placeholder: "Full Name",
  autoComplete: "off",
};
const titleInputValues = {
  name: "title",
  labelTitle: "Title",
  type: "text",
  placeholder: "Your Role",
  autoComplete: "off",
};
const descriptionInputValues = {
  name: "description",
  labelTitle: "Description",
  placeholder: "Describe Yourself...",
  autoComplete: "off",
  charLimits: 30,
};
const EditHeroContentText = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="fullName"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={fullNameInputValues}
            />
          )}
        />{" "}
        <Controller
          name="title"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={titleInputValues}
            />
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
          <ColorPickerMolecule name={"leftColor"} title="Left" form={form} />
          <ColorPickerMolecule name={"rightColor"} title="Right" form={form} />
        </div>
        <div className="flex justify-center items-center my-4">
          <ColorfulLabelAtom
            name={form.watch("title")}
            leftColor={form.watch("leftColor")}
            rightColor={form.watch("rightColor")}
          />
        </div>
        <Controller
          name="description"
          control={form?.control}
          render={({ field, fieldState }) => (
            <TextareaField
              field={field}
              fieldState={fieldState}
              item={descriptionInputValues}
            />
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default EditHeroContentText;
