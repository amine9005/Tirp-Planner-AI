import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import {
  DisplayMessagesType,
  LoadingStateType,
} from "@/types/create-trip.types";
import { H2 } from "@/components/ui/atoms/heading/heading2";

const DisplayMessagesMolecule = ({
  messages,
  isLoading,
}: LoadingStateType & DisplayMessagesType) => {
  return (
    <>
      {messages && messages.length > 0 ? (
        messages.map((message, index) =>
          message.role === "user" ? (
            <div key={index} className="flex justify-end mt-2">
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {message.message}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start mt-2">
              <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                {message.message}
              </div>
            </div>
          ),
        )
      ) : (
        <div className="flex flex-col items-center justify-center">
          <H2 size={"xl"}>
            {" "}
            Start Planing Your
            <strong className="text-primary"> Trip</strong> Using AI
          </H2>
          <P size={"sm"} className="mt-2 text-center" variant={"muted"}>
            Discover personalized travel itineraries, find the best travel
            destinations and experiences with AI-assisted travel planner. Plan
            your trip with ease and comfort, without worrying about the details.
            Start planning your trip now and enjoy your journey!
          </P>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-start mt-2">
          <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
            <Loader2Icon className="animate-spin size-5" />
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayMessagesMolecule;
