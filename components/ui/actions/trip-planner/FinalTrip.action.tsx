import { Button } from "@/components/ui/atoms/button/button";
import ProcessingResultsMolecule from "@/components/ui/molecules/processing-results/ProcessingResults.molecule";
import { useTripPlanHook } from "@/hooks/submit/useTripPlanSubmit.hook";

const FinalTripAction = () => {
  const { generateTripAndSaveTrip, isLoading, success } = useTripPlanHook();

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 bg-secondary rounded-lg">
      <ProcessingResultsMolecule
        title="✈️ Planning Your Dream Trip..."
        desc="Gathering best Destinations, activities and travel details for you."
      />
      {success ? (
        <Button disabled={isLoading} className="mt-4 w-full">
          View Trip
        </Button>
      ) : isLoading ? (
        <Button disabled={isLoading} className="mt-4 w-full">
          Loading...{" "}
        </Button>
      ) : (
        <Button
          onClick={() => generateTripAndSaveTrip()}
          disabled={isLoading}
          className="mt-4 w-full"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default FinalTripAction;
