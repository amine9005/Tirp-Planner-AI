import { Button } from "@/components/ui/atoms/button/button";
import { Field } from "@/components/ui/atoms/field/field";
import { memo } from "react";

interface Props {
  handle_reset?: () => void;
  formName: string;
}
const SubmitField = ({ handle_reset, formName }: Props) => {
  return (
    <Field
      className="flex justify-end items-center gap-6"
      orientation="horizontal"
    >
      <Button
        width={"md"}
        type="reset"
        variant="outline"
        onClick={handle_reset}
      >
        Reset
      </Button>
      <Button width={"md"} type="submit" form={`form-${formName}`}>
        Submit
      </Button>
    </Field>
  );
};

export default memo(SubmitField);
