import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import { ItineraryType } from "@/types/create-trip.types";
import { ExternalLink, TicketCheckIcon, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ItineraryCard = ({ dayData }: { dayData: ItineraryType }) => {
  return (
    <div>
      <P className={"mb-4"}>
        Best Time To Visit:{" "}
        <strong className="text-primary">
          {dayData.best_time_to_visit_day}
        </strong>
      </P>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dayData.activities.map((activity, idx) => (
          <BlurFade onlyOnce={false} key={idx} delay={0.3 + idx * 0.1} inView>
            <div
              key={idx}
              className={"flex flex-col justify-between gap-2 h-120"}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={400}
                height={200}
                alt={activity.place_image_url}
                className="object-cover rounded-xl w-full h-50 mb-2"
              />
              <H2 size={"lg"}>{activity.place_name}</H2>
              <P variant={"muted"} className="line-clamp-2">
                {activity.place_details}
              </P>
              <P className="flex justify-between items-center" variant={"info"}>
                <TicketCheckIcon /> {activity.ticket_pricing}
              </P>
              {/* <P
                  variant={"warning"}
                  className="flex justify-between items-center"
                >
                  <Clock className="size-5" />
                  {activity.time_travel_each_location}
                </P> */}
              <P
                variant={"warning"}
                className="flex justify-between items-center"
              >
                <Timer className="size-5" />
                {activity.best_time_to_visit}
              </P>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${activity.place_name}`}
                target="_"
                className={` ${buttonVariants({
                  variant: "secondary",
                  width: "full",
                })}`}
              >
                View <ExternalLink className="size-5" />
              </Link>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ItineraryCard;
