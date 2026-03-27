import HeroParallax from "@/components/ui/molecules/hero-parallax-image/HeroParallaxImage.molecule";
import HeroVideoMolecule from "@/components/ui/molecules/hero-video/HeroVideo.molecule";
import Hero3DModelMolecule from "@/components/ui/molecules/hero-3d-model/Hero3DModel.molecule";
import HeroImage from "@/components/ui/molecules/hero-image/HeroImage.molecule";
import { heroMediaSchemaType } from "@/validations/hero.zod";

const HeroMediaDisplayOrganism = ({
  heroData,
}: {
  heroData: heroMediaSchemaType;
}) => {
  const {
    displayType,
    videoSource,
    imageUrl,
    videoUrl,
    model3D_Url,
    videoFileName,
  } = heroData;

  if (displayType === "Image") {
    return <HeroImage imageUrl={imageUrl!} />;
  } else if (displayType === "Parallax") {
    return <HeroParallax imageUrl={imageUrl!} />;
  } else if (displayType === "Video") {
    return (
      <HeroVideoMolecule
        videoSource={videoSource}
        videoUrl={videoUrl}
        videoFileName={videoFileName}
      />
    );
  } else if (displayType === "3D Model") {
    return (
      <Hero3DModelMolecule
        modelName={model3D_Url!}
        className="bg-gray-100 rounded-lg"
      />
    );
  }

  return <div>Something went wrong no hero media provided</div>;
};

export default HeroMediaDisplayOrganism;
