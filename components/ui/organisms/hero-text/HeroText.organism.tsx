import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { heroTextSchemaType } from "@/validations/hero.zod";
import { CSSProperties } from "react";

const HeroText = ({ heroData }: { heroData: heroTextSchemaType }) => {
  const { leftColor, rightColor, title, description } = heroData;

  const fullName = heroData?.fullName + " - ";
  const FullNameDelay = fullName.split(" ").length * 0.1;

  const titleStyle: CSSProperties = {
    marginRight: "8px",
    display: "inline-block",
    color: "transparent",
    backgroundClip: "text",
    backgroundImage: `linear-gradient(0.25turn, ${leftColor},  ${rightColor})`,
  };

  return (
    <div className="max-w-xl text-center lg:text-start">
      <H2 size={"4xl"}>
        {fullName.split(" ").map((word, index) => (
          <BlurFade
            className="mr-2 inline-block"
            key={index}
            inView
            onlyOnce={false}
            delay={index * 0.1}
          >
            {word}
          </BlurFade>
        ))}

        <BlurFade
          style={titleStyle}
          onlyOnce={false}
          delay={FullNameDelay}
          inView
        >
          {title}
        </BlurFade>
      </H2>
      <BlurFade inView onlyOnce={false} delay={FullNameDelay + 0.2}>
        <P size={"lg"} className="dark mt-10">
          {description}
        </P>
      </BlurFade>
    </div>
  );
};

export default HeroText;
