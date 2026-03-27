import { Loader2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/atoms/button/button";
import { useDeleteMutation } from "@/hooks/mutations/useProjectMutation.hook";

interface Props {
  remove: (index: number) => void;
  index: number;
  id?: string;
  deleteRoute: string;
}

const DeleteItemMolecule = ({ remove, index, id, deleteRoute }: Props) => {
  const { mutateAsync: deleteVideo, isPending } = useDeleteMutation();

  const handle_delete = async () => {
    // console.log("id ", id);
    if (id) {
      await deleteVideo({ id, deleteRoute });
      remove(index);
    } else {
      remove(index);
    }
  };

  return (
    <Button
      disabled={isPending}
      width={"fit"}
      type="button"
      className="rounded-full p-2"
      variant={"destructive_outline"}
      onClick={() => handle_delete()}
    >
      {isPending ? (
        <Loader2Icon className="size-6 animate-spin" />
      ) : (
        <Trash2Icon className="size-6" />
      )}
    </Button>
  );
};

export default DeleteItemMolecule;
