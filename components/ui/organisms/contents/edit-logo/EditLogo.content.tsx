"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import FormsCheckBoxMolecule from "@/components/ui/molecules/forms-checkbox/FormsCheckBox.molecule";
import { LogoFormType } from "@/validations/logo.zod";
import ColorPickerMolecule from "@/components/ui/molecules/color-picker/ColorPicker.molecule";
import UploadImageFieldInstant from "@/components/ui/molecules/upload-image-instant/UploadImageInstant.molecule";
import { DeleteRoutes } from "@/helpers/utils.helper";

interface Props {
  form: LogoFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const fullNameInputValues = {
  name: "Site Title",
  labelTitle: "Site Title",
  type: "text",
  placeholder: "Site Title",
  autoComplete: "off",
};

const EditLogoFormContent = ({ form, formName, handle_submit }: Props) => {
  const checkboxValues = { labelTitle: "Use an Image", form };

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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
          <ColorPickerMolecule name={"leftColor"} title="Left" form={form} />
          <ColorPickerMolecule name={"rightColor"} title="Right" form={form} />
        </div>
        <FormsCheckBoxMolecule
          checkFor="useImage"
          values={checkboxValues}
          className="mt-4"
        />
        <div className="flex flex-wrap justify-between items-center gap-3 mt-2">
          <Controller
            name="imagePath"
            control={form?.control}
            render={({ field, fieldState }) => (
              <UploadImageFieldInstant
                deleteRoute={DeleteRoutes.DELETE_LOGO_ROUTE}
                field={field}
                imageUrl="/logos/"
                fieldState={fieldState}
                name={"imagePath"}
                form={form}
                text="Change Logo"
                limit={1}
              />
            )}
          />
        </div>
      </FieldGroup>
    </form>
  );
};

export default EditLogoFormContent;
