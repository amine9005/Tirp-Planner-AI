import { BlurFade } from "@/components/ui/Effects/blur-fade";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/Effects/3d-card";
import Image from "next/image";

const HeroParallax = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <BlurFade onlyOnce={false} delay={0.6} inView>
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-140 h-auto rounded-xl p-6 border  cursor-pointer">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <Image
              loading="eager"
              src={"/hero/images/" + imageUrl}
              className="rounded-lg bg-gray-300 object-cover w-full h-full"
              width={720}
              height={480}
              alt="Picture of Full Name"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </BlurFade>
  );
};

export default HeroParallax;
