import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/atoms/select/select";

import { UseFormReturn } from "react-hook-form";

interface Item {
  name: string;
  labelTitle?: React.ReactNode;
  options: string[];
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}
interface Props {
  item: Item;
  field: FieldValues;
  values: string[];
  onSelectChange?: (value: string) => void;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}
const DynamicSelectField = ({
  item,
  fieldState,
  values,
  onSelectChange,
}: Props) => {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={`form-${item.name}`}>{item.labelTitle}</FieldLabel>
      <Select
        onValueChange={(e) =>
          onSelectChange ? onSelectChange(e) : item.form.setValue(item.name, e)
        }
        aria-invalid={fieldState.invalid}
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder={item.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value, idx) => (
            <SelectItem key={idx} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

export default DynamicSelectField;
