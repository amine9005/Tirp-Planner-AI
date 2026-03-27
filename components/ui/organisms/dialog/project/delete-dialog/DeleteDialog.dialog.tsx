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
import { P } from "@/components/ui/atoms/text/Text";
import LoadingSubmitButtonMolecule from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import { useDeleteProjectMutation } from "@/hooks/mutations/useProjectMutation.hook";
import { Trash2Icon } from "lucide-react";
import { ReactNode, useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: UseFormReturn<any>;
  name?: string;
  text?: string | ReactNode;
  id: string;
}

const DeleteProjectDialog = ({ title, text, id }: Props) => {
  const {
    mutateAsync: deleteProject,
    isPending,
    isSuccess,
  } = useDeleteProjectMutation();

  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    await deleteProject({ id });
    if (isSuccess) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trash2Icon className="size-5 hover:text-destructive cursor-pointer hover:scale-110" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="text-destructive">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center my-4">
          <P>{text}</P>
        </div>
        <DialogFooter className="flex w-full justify-end items-center gap-4">
          <DialogClose>
            <Button width={"md"} variant={"outline"}>
              Cancel
            </Button>
          </DialogClose>

          <LoadingSubmitButtonMolecule
            loading={isPending}
            handle_click={handleDelete}
            width={"md"}
            className="bg-destructive hover:bg-destructive/85"
          >
            Delete
          </LoadingSubmitButtonMolecule>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProjectDialog;
