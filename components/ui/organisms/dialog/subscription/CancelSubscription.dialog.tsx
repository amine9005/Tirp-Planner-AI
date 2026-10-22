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
import { useCancelSubscriptionHook } from "@/hooks/mutations/useSubscriptionMutation.hook";
import { ReactNode, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { redirect } from "next/navigation";

interface Fn_Props {
  referenceId: string;
  subscriptionId: string;
  returnUrl: string;
}

interface Props extends Fn_Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: UseFormReturn<any>;
  name?: string;
  text?: string | ReactNode;
  id: string;
}

const CancelSubscriptionDialog = ({
  title,
  text,
  referenceId,
  subscriptionId,
  name,
  returnUrl,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: cancelSubscription } = useCancelSubscriptionHook();

  const handle_click = async ({
    referenceId,
    subscriptionId,
    returnUrl,
  }: Fn_Props) => {
    // console.log(
    //   "referenceId: ",
    //   referenceId,
    //   " subscriptionId: ",
    //   subscriptionId,
    //   " returnUrl: ",
    //   returnUrl,
    // );
    setIsLoading(true);
    const resp = await cancelSubscription({
      referenceId,
      subscriptionId,
      returnUrl,
    });
    redirect(resp.data.data.url);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{name}</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-106.25"
        aria-describedby={"Are You Sure You Want To Unsubscribe"}
      >
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
            loading={isLoading}
            handle_click={() =>
              handle_click({
                referenceId: referenceId,
                returnUrl: returnUrl,
                subscriptionId: subscriptionId,
              })
            }
            width={"md"}
            className="bg-destructive hover:bg-destructive/85"
          >
            Unsubscribe
          </LoadingSubmitButtonMolecule>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelSubscriptionDialog;
