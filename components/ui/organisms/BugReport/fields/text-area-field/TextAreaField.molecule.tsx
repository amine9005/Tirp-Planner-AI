import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/atoms/input-group/input-group";
import { FormType } from "@/validations/bugReport.zod";
import { Controller } from "react-hook-form";

interface Field {
  name: string;
  fieldLabel?: React.ReactNode;
  placeholder?: string;
  rows?: number;
  charLimits?: number;
  fieldDescription?: React.ReactNode;
}
interface Props {
  form: FormType;
  item: Field;
}

const TextAreaField = ({ form, item }: Props) => {
  return (
    <Controller
      name="description"
      control={form?.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={`form-${item.name}`}>
            {item.fieldLabel}
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              {...field}
              id={`form-${item.name}`}
              placeholder={`${item.placeholder}`}
              rows={item.rows}
              className="min-h-24 resize-none"
              aria-invalid={fieldState.invalid}
            />
            <InputGroupAddon align="block-end">
              <InputGroupText className="tabular-nums">
                {field.value.length}/ {item.charLimits}
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>{item.fieldDescription}</FieldDescription>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default TextAreaField;
