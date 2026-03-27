import Hero2Cols from "@/components/ui/layouts/hero/Hero2Cols.layout";
import HeroText from "@/components/ui/organisms/hero-text/HeroText.organism";
import { serverHeroTextQuery } from "@/hooks/queries/useHeroTextQuery.hook";

const Hero2ColsAction = async () => {
  const heroTextData = await serverHeroTextQuery();

  return (
    <Hero2Cols
      cols={10}
      right_span={5}
      left_span={5}
      left_children={<HeroText heroData={heroTextData} />}
      // right_children={<HeroVideoMolecule />}
    />
  );
};

export default Hero2ColsAction;
