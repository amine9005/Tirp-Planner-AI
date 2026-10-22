"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/atoms/button/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useCancelSubscriptionHook } from "@/hooks/mutations/useSubscriptionMutation.hook";

interface Props {
  referenceId: string;
  subscriptionId: string;
  returnUrl: string;

  text?: string;
}
const CancelSubscriptionButtonMolecule = ({
  referenceId,
  subscriptionId,
  returnUrl,
  text,
}: Props) => {
  const [loading, seLoading] = useState(false);
  const { mutateAsync: cancelSubscription } = useCancelSubscriptionHook();

  const handle_click = async ({
    referenceId,
    subscriptionId,
    returnUrl,
  }: Props) => {
    console.log(
      "referenceId: ",
      referenceId,
      " subscriptionId: ",
      subscriptionId,
      " returnUrl: ",
      returnUrl,
    );
    seLoading(true);
    const resp = await cancelSubscription({
      referenceId,
      subscriptionId,
      returnUrl,
    });

    redirect(resp.data.data.url);
  };

  return (
    <Button
      onClick={() => handle_click({ referenceId, subscriptionId, returnUrl })}
      disabled={loading}
    >
      {text}
      {loading && <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
};

export default CancelSubscriptionButtonMolecule;
