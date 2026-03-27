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
} from "../../atoms/input-group/input-group";
import { FieldValues } from "react-hook-form";

interface Item {
  name: string;
  labelTitle?: React.ReactNode;
  placeholder?: string;
  autoComplete: string;
  rows?: number;
  charLimits?: number;
  fieldDescription?: React.ReactNode;
}
interface Props {
  item: Item;
  field: FieldValues;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}
const TextareaField = ({ item, field, fieldState }: Props) => {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={`form-${item.name}`}>{item.labelTitle}</FieldLabel>
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
  );
};

export default TextareaField;
