import { redirect } from "next/navigation";
import { Button } from "@/components/ui/atoms/button/button";
import { useEffect, useState } from "react";
import { isAuthenticatedAction } from "@/app/api/actions/auth/auth.controller";
import { useUpdateSubscriptionMutationHook } from "@/hooks/mutations/useSubscriptionMutation.hook";
import { Loader2 } from "lucide-react";
interface Props {
  plan: string;
  successUrl: string;
  cancelUrl: string;
  returnUrl?: string;
  text?: string;
}
const PaymentButtonMolecule = ({
  cancelUrl,
  plan,
  successUrl,
  returnUrl,
  text,
}: Props) => {
  const [user, setUser] = useState(false);
  const [loading, seLoading] = useState(false);
  const { mutateAsync: updateSubscription } =
    useUpdateSubscriptionMutationHook();

  useEffect(() => {
    const setUserData = async () => {
      setUser(await isAuthenticatedAction());
    };

    setUserData();
  });

  const handle_click = async ({
    plan,
    successUrl,
    cancelUrl,
    returnUrl,
  }: Props) => {
    if (user) {
      seLoading(true);

      const data = await updateSubscription({
        plan,
        successUrl,
        cancelUrl,
        returnUrl,
      });
      seLoading(false);
      console.log("subscription data ", data);
    }
  };

  return (
    <Button
      onClick={() => handle_click({ plan, successUrl, cancelUrl, returnUrl })}
    >
      {text}
      {!loading && <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
};

export default PaymentButtonMolecule;
