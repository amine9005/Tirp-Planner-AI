import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { Textarea } from "@/components/ui/atoms/textarea/textarea";
import { buttonVariants } from "@/components/ui/atoms/button/button";
import { ArrowDown, Send } from "lucide-react";
import { HeroVideoDialog } from "@/components/ui/atoms/hero-video-dialog/hero-video-dialog";
import Link from "next/link";

import SuggestionsAction from "@/components/ui/actions/AI/Suggestions.action";

const Hero1Organism = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center space-y-6 max-w-4xl">
      {/* Content */}
      <div className="space-y-6 flex flex-col justify-center items-center w-full">
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
      <div className="w-full relative border rounded-2xl shadow ">
        <Textarea
          placeholder="Plan a trip form London to Los Angles"
          className="w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none shadow-none"
        ></Textarea>
        <Link
          className={`absolute bottom-4 right-4 rounded-lg ${buttonVariants({ variant: "default" })}`}
          href={"/create-new-trip"}
        >
          <Send className="size-5 " />
        </Link>
      </div>
      {/* Suggestions List */}
      <SuggestionsAction display={"horizontal"} />
      <H2 className="my-7 mt-14 flex gap-2">
        Not Sure What To Do ?{" "}
        <strong className="flex">
          Watch This <ArrowDown className="ml-5 size-9 text-bold" />
        </strong>
      </H2>

      {/* Video Section */}
      <div className="mt-12">
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Hero1Organism;
