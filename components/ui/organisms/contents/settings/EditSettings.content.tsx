"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { FormEvent } from "react";
import ColorPickerMolecule from "@/components/ui/molecules/color-picker/ColorPicker.molecule";
import FormsCheckBox from "@/components/ui/molecules/forms-checkbox/FormsCheckBox.molecule";
import { SettingsFormType } from "@/validations/settings.zod";

interface Props {
  form: SettingsFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const copyrightInputValues = {
  name: "copyright",
  labelTitle: "Copyright",
  type: "text",
  placeholder: "Copyright...",
  autoComplete: "off",
};

const EditSettings = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={formName} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="copyright"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={copyrightInputValues}
            />
          )}
        />{" "}
        <div className="flex flex-col justify-center items-start mt-2 gap-4">
          <ColorPickerMolecule
            name={"primaryColor"}
            title="Primary Color"
            form={form}
          />
          <ColorPickerMolecule
            name={"secondaryColor"}
            title="Secondary Color"
            form={form}
          />

          <FormsCheckBox
            checkFor={"useCircle"}
            values={{ labelTitle: "Use Circle", form: form }}
          />

          <ColorPickerMolecule
            name={"circleColor"}
            title="Circle Color"
            form={form}
          />
        </div>
      </FieldGroup>
    </form>
  );
};

export default EditSettings;
