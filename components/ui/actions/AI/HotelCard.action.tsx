"use client";
import { useEffect } from "react";
import HotelCard from "@/components/ui/organisms/cards/trip-planner/Hotel.card";
import { Hotel } from "@/db/models/Hotel.model";
import { useGooglePlacesImagesMutation } from "@/hooks/mutations/useGooglePlacesApiMutation.hook";

const HotelCardAction = ({ hotel, idx }: { hotel: Hotel; idx: number }) => {
  const { mutateAsync: placeDetails } = useGooglePlacesImagesMutation();

  useEffect(() => {
    placeDetails({ placeName: hotel.hotel_name })
      .then((res) => {
        console.log("place details: ", res);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel.hotel_name]);

  return <HotelCard hotel={hotel} idx={idx} />;
};

export default HotelCardAction;
