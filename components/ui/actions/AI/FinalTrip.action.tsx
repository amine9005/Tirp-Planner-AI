import { Button } from "@/components/ui/atoms/button/button";
import ProcessingResultsMolecule from "@/components/ui/molecules/processing-results/ProcessingResults.molecule";

const FinalTripAction = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 bg-secondary rounded-lg">
      <ProcessingResultsMolecule
        title="✈️ Planning Your Dream Trip..."
        desc="Gathering best Destinations, activities and travel details for you."
      />

      <Button disabled className="mt-4 w-full">
        View Trip
      </Button>
    </div>
  );
};

export default FinalTripAction;
