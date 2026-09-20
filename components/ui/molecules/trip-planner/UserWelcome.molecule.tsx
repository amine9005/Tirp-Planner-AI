import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import SuggestionsAction from "../../actions/AI/Suggestions.action";

const UserWelcomeMolecule = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <H2 size={"xl"}>
        {" "}
        Start Planing Your
        <strong className="text-primary"> Trip</strong> Using AI
      </H2>
      <P size={"sm"} className="mt-2 text-center" variant={"muted"}>
        Discover personalized travel itineraries, find the best travel
        destinations and experiences with AI-assisted travel planner. Plan your
        trip with ease and comfort, without worrying about the details. Start
        planning your trip now and enjoy your journey!
      </P>
      <SuggestionsAction display={"vertical"} />
    </div>
  );
};

export default UserWelcomeMolecule;
