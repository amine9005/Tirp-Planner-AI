import { Button } from "@/components/ui/atoms/button/button";
import ProcessingResultsMolecule from "@/components/ui/molecules/processing-results/ProcessingResults.molecule";
import { useTripPlanHook } from "@/hooks/submit/useTripPlanSubmit.hook";
import { useAIMessagesStore } from "@/store/AI/messages.store";

const FinalTripAction = () => {
  const { generateTripAndSaveTrip, isLoading, success } = useTripPlanHook();
  const activeIndex = useAIMessagesStore((state) => state.switchView);
  const setActiveIndex = useAIMessagesStore((state) => state.setSwitchView);

  const handle_map_switch = () => {
    // console.log("active index: ", activeIndex);

    if (activeIndex === 1) {
      setActiveIndex(2);
    } else {
      setActiveIndex(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 bg-secondary rounded-lg">
      <ProcessingResultsMolecule
        title="✈️ Planning Your Dream Trip..."
        desc="Gathering best Destinations, activities and travel details for you."
      />
      {success ? (
        <Button
          onClick={() => handle_map_switch()}
          disabled={isLoading}
          className="mt-4 w-full"
        >
          {activeIndex === 1 ? "View Trip" : "View Map"}
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
