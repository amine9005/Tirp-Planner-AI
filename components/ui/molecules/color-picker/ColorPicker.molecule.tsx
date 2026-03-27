import { Label } from "@/components/ui/atoms/label/label";
import ColorPickerDialog from "@/components/ui/organisms/dialog/color-picker/ColorPicker.dialog";
import { UseFormReturn } from "react-hook-form";

interface Props {
  name: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

const ColorPickerMolecule = ({ title, name, form }: Props) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <Label htmlFor={name}>{title}:</Label>
      <Label htmlFor={name} style={{ color: form.watch(name) }}>
        {form.getValues(name)}
      </Label>
      <ColorPickerDialog title={title + " Color"} form={form} name={name} />
    </div>
  );
};

export default ColorPickerMolecule;
