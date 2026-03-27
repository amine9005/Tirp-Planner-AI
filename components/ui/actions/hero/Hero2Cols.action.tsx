import Hero2Cols from "@/components/ui/layouts/hero/Hero2Cols.layout";
import HeroText from "@/components/ui/organisms/hero-text/HeroText.organism";
import HeroMediaDisplayOrganism from "@/components/ui/organisms/hero-media-display/HeroMediaDisplay.organism";
import { serverHeroTextQuery } from "@/hooks/queries/useHeroTextQuery.hook";
import { serverHeroMediaQuery } from "@/hooks/queries/useHeroMediaQuery.hook";

const Hero2ColsAction = async () => {
  const heroTextData = await serverHeroTextQuery();
  const heroMediaData = await serverHeroMediaQuery();

  return (
    <Hero2Cols
      cols={10}
      right_span={5}
      left_span={5}
      left_children={<HeroText heroData={heroTextData} />}
      right_children={<HeroMediaDisplayOrganism heroData={heroMediaData} />}
    />
  );
};

export default Hero2ColsAction;
