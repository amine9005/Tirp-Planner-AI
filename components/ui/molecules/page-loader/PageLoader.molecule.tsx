import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import { ReactNode } from "react";

interface Props {
  isLoading: boolean;
  error: Error | null;
  errorMessage: string;
  data: object | undefined | null;
  children: ReactNode;
}

const PageLoaderMolecule = ({
  isLoading,
  error,
  data,
  children,
  errorMessage,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {errorMessage}
        </P>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoaderMolecule;
