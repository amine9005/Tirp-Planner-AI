import React, { useEffect, useState } from "react";
import { ActivityType } from "@/types/create-trip.types";
import { useUnsplashImagesQuery } from "@/hooks/queries/useUnsplashImagesQuery.hook";
import { useGooglePlacesImagesMutation } from "@/hooks/mutations/useGooglePlacesApiMutation.hook";
import ActivityCard from "../../organisms/cards/trip-planner/Activity.card";

const ActivityCardAction = ({ activity }: { activity: ActivityType }) => {
  const { mutateAsync: placeDetails } = useGooglePlacesImagesMutation();
  const { mutateAsync: getPlaceImage } = useUnsplashImagesQuery();

  const [placeImage, setPlaceImage] = useState<string>("");

  useEffect(() => {
    getPlaceImage({
      placeName: activity.place_name,
      per_page: 1,
      page_number: 1,
    })
      .then(async (res) => {
        // console.log("activity image: ", res.data.data.results[0].urls.small);

        setPlaceImage(res.data.data.results[0].urls.small);
      })
      .catch((err) => console.log(err));

    placeDetails({ placeName: activity.place_name })
      .then((res) => {
        console.log("activity details: ", res);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity.place_name]);
  return <ActivityCard activity={activity} place_image={placeImage} />;
};

export default ActivityCardAction;
