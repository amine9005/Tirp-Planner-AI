import { Input } from "../atoms/input/input";
import { Label } from "../atoms/label/label";
import { P } from "../atoms/text/Text";

type Props = {
  id: string;
  labelProps?: React.ComponentProps<typeof Label>;
  labelChildren?: React.ReactNode;
  textProps?: React.ComponentProps<typeof P>;
  textChildren?: React.ReactNode;
  inputProps?: React.ComponentProps<typeof Input>;
};
const LabeledInputWithMessage = ({
  id,
  labelProps,
  labelChildren,
  inputProps,
  textChildren,
  textProps,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-start space-y-2 w-full">
      <Label htmlFor={`label-for-input-${id}`} {...labelProps}>
        {labelChildren}
      </Label>
      <Input id={id} {...inputProps} />
      <P {...textProps}>{textChildren}</P>
    </div>
  );
};

export default LabeledInputWithMessage;
