import { Button } from "@/components/ui/atoms/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/atoms/dialog/dialog";
import { HexColorPicker } from "react-colorful";
import { UseFormReturn } from "react-hook-form";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  name: string;
}

const ColorPickerDialog = ({ title, form, name }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center my-4">
          <HexColorPicker
            color={form.getValues(name)}
            onChange={(color) => form.setValue(name, color)}
          />
        </div>
        <DialogFooter>
          <DialogClose
            className="flex w-full justify-center items-center"
            asChild
          >
            <Button width={"fit"} variant={"outline"}>
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ColorPickerDialog;
