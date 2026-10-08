"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/atoms/button/button";
import { useState } from "react";
import { useRestoreSubscriptionHook } from "@/hooks/mutations/useSubscriptionMutation.hook";
import { Loader2 } from "lucide-react";

interface Props {
  referenceId: string;
  subscriptionId: string;
  text?: string;
}
const RestoreSubscriptionButtonMolecule = ({
  referenceId,
  subscriptionId,
  text,
}: Props) => {
  const [loading, seLoading] = useState(false);
  const { mutateAsync: restoreSubscription } = useRestoreSubscriptionHook();

  const handle_click = async ({ referenceId, subscriptionId }: Props) => {
    seLoading(true);
    const resp = await restoreSubscription({
      referenceId,
      subscriptionId,
    });
    redirect(resp.data.data.url);
  };

  return (
    <Button
      onClick={() => handle_click({ referenceId, subscriptionId })}
      disabled={loading}
    >
      {text}
      {loading && <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
};

export default RestoreSubscriptionButtonMolecule;
