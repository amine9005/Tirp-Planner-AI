import { Button } from "@/components/ui/atoms/button/button";
import { useGetBillingPortalHook } from "@/hooks/mutations/useSubscriptionMutation.hook";
import { redirect } from "next/navigation";

interface Props {
  text: string;
  referenceId?: string;
  returnUrl: string;
}

const BillingPortalButtonMolecule = ({
  text,
  referenceId,
  returnUrl,
}: Props) => {
  const { mutateAsync: getBillingPortal } = useGetBillingPortalHook();

  const handel_click = async ({
    referenceId,
    returnUrl,
  }: {
    referenceId?: string;
    returnUrl: string;
  }) => {
    if (!referenceId) return;
    const resp = await getBillingPortal({ referenceId, returnUrl });
    // console.log("billing portal: ", resp);
    redirect(resp.data.data.url);
  };

  return (
    <Button onClick={() => handel_click({ referenceId, returnUrl })}>
      {text}
    </Button>
  );
};

export default BillingPortalButtonMolecule;
