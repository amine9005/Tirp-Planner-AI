"use client";
import { useGetRandomPlaceHolderImageQuery } from "@/hooks/queries/useTripPlannerQuery.hook";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { H2 } from "@/components/ui/atoms/heading/heading2";

const TripPlaceHolderImageAction = () => {
  const [placeImage, setPlaceImage] = useState<string>("");
  const { getRandomImageByName } = useGetRandomPlaceHolderImageQuery();

  useEffect(() => {
    getRandomImageByName({ placeName: "travel" }).then((img) =>
      setPlaceImage(img),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center h-[85vh] w-full col-span-2 gap-2">
      <div className="relative">
        <Image
          src={placeImage ? placeImage : ""}
          alt=""
          width={1080}
          height={720}
          className="rounded-2xl object-cover w-3xl h-2/3 border-none"
        />
        <H2 className=" absolute top-8 left-8 " size="3xl">
          Start Chatting To Create A New Trip...{" "}
        </H2>
      </div>
    </div>
  );
};

export default TripPlaceHolderImageAction;
