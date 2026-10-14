import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { ArrowRightSquare, Clock, Users, Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TripPlanType } from "@/types/create-trip.types";
const TripCard = ({
  trip,
  imageSrc,
}: {
  trip: TripPlanType;
  imageSrc?: string;
}) => {
  console.log("trip ", imageSrc);
  return (
    <div className="flex flex-col gap-1 hover:scale-110 transition-all duration-300 hover:opacity-85 ">
      <Image
        src={imageSrc ? imageSrc : "/Nature-Image.jpg"}
        width={400}
        height={200}
        alt={"/destination-image"}
        className="rounded-xl object-cover w-full h-50 shadow pb-2"
      />
      <H2 className="font-semibold" size={"lg"}>
        {trip.origin} To {trip.destination}
      </H2>
      <P className="font-semibold " size={"default"} variant={"muted"}>
        {trip.travel_interests}
      </P>
      <div className="flex-col  w-full space-y-2">
        <P className="flex flex-row gap-4 justify-between" variant={"success"}>
          {" "}
          <strong className="flex flex-row gap-2">
            <Wallet className="size-6 " /> Budget
          </strong>
          {trip.budget}
        </P>
        <P className="flex flex-row gap-4 justify-between" variant={"warning"}>
          {" "}
          <strong className="flex flex-row gap-2">
            <Users className="size-6 " /> Group Size
          </strong>
          {trip.group_size}
        </P>
        <P className="flex flex-row gap-4 justify-between" variant={"info"}>
          {" "}
          <strong className="flex flex-row gap-2">
            <Clock className=" size-6" /> Trip Duration
          </strong>
          {trip.duration}{" "}
        </P>
      </div>
      <P className="line-clamp-2" variant={"default"}>
        {trip.special_requirements}
      </P>
      <Link
        href={`/trips/${trip._id}`}
        target="_"
        className={`mt-2 ${buttonVariants({
          variant: "secondary",
          width: "full",
        })}`}
      >
        View
        <ArrowRightSquare className="size-5" />
      </Link>
    </div>
  );
};

export default TripCard;
