import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { Input } from "@/components/ui/atoms/input/input";
import { FormType } from "@/validations/bugReport.zod";
import { Controller } from "react-hook-form";

interface Field {
  name: string;
  labelTitle?: React.ReactNode;
  type?: string;
  placeholder?: string;
  autoComplete: string;
}
interface Props {
  form?: FormType;
  item: Field;
}
const InputField = ({ form, item }: Props) => {
  return (
    <Controller
      name="title"
      control={form?.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={`form-${item.name}`}>
            {item.labelTitle}
          </FieldLabel>
          <Input
            {...field}
            id={`form-${item.name}`}
            type={item.type}
            aria-invalid={fieldState.invalid}
            placeholder={item.placeholder}
            autoComplete={item.autoComplete}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default InputField;
