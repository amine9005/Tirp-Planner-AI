import React from "react";
import { H2 } from "../../atoms/heading/heading2";
import { P } from "../../atoms/text/Text";

const Hero1Organism = () => {
  return (
    <div className="flex items-center">
      {/* Content */}
      <div className="space-y-6 flex flex-col justify-center items-center ">
        <H2 className="text-xl md:text-5xl font-bold">
          {" "}
          Hey, I&apos;m Your Personal{" "}
          <span className="text-primary">Trip Planner</span>
        </H2>
        <P className="text-xl">
          Tell Me What You Want And I Will Handle The Rest: Flights , Hotels,
          trip plan - all in seconds
        </P>
      </div>
      {/* Input Box */}

      {/* Suggestions List */}

      {/* Video Section */}
    </div>
  );
};

export default Hero1Organism;
