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
  onSelectChange?: (value: string) => void;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}
const SelectField = ({ item, field, fieldState, onSelectChange }: Props) => {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={`form-${item.name}`}>{item.labelTitle}</FieldLabel>
      <Select
        {...field}
        onValueChange={(e) =>
          onSelectChange ? onSelectChange(e) : item.form.setValue(item.name, e)
        }
        aria-invalid={fieldState.invalid}
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder={item.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {item.options.map((value, idx) => (
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

export default SelectField;
