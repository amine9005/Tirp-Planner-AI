import { BlurFade } from "@/components/ui/Effects/blur-fade";

import Image from "next/image";

const HeroImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <BlurFade onlyOnce={false} delay={0.6} inView>
      <Image
        loading="eager"
        src={"/hero/images/" + imageUrl}
        className="rounded-lg bg-gray-300 object-cover w-full h-full"
        width={720}
        height={480}
        alt="Picture of Full Name"
      />
    </BlurFade>
  );
};

export default HeroImage;
