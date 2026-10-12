// import { useUnsplashImagesQuery } from "./useUnsplashImagesQuery.hook";

// export function useGetRandomPlaceHolderImageQuery() {
//   const { mutateAsync: getImageFn } = useUnsplashImagesQuery();

//   const getRandomImageByName = async ({ placeName }: { placeName: string }) => {
//     const max = 9;
//     const min = 0;
//     const choice = Math.floor(Math.random() * (max - min)) + min;
//     const page_number = Math.floor(Math.random() * (max - min)) + min;
//     const res = await getImageFn({
//       placeName,
//       page_number,
//       per_page: 10,
//     });

//     return res.data.data.results[choice].urls.regular;
//   };
//   return { getRandomImageByName };
// }

import { useQuery } from "@tanstack/react-query";
import { useUnsplashImagesQuery } from "./useUnsplashImagesQuery.hook";
import axiosInstance from "@/lib/axios";

export function useGetRandomPlaceHolderImageQuery(placeName: string) {
  const { mutateAsync: getImageFn } = useUnsplashImagesQuery();

  const getRandomImageByName = async ({ placeName }: { placeName: string }) => {
    const max = 9;
    const min = 0;
    const choice = Math.floor(Math.random() * (max - min)) + min;
    const page_number = Math.floor(Math.random() * (max - min)) + min;
    const res = await getImageFn({
      placeName,
      page_number,
      per_page: 10,
    });

    return res.data.data.results[choice].urls.regular;
  };
  return useQuery({
    queryFn: () => getRandomImageByName({ placeName }),
    queryKey: ["placeholder-image"],
    staleTime: Infinity,
  });
}

// Custom hook to fetch trips using React Query
export const useTripsQuery = (id: string | undefined) => {
  // Define the API endpoint for fetching the trips
  // console.log("id ", id);
  const fetchTrips = async () => {
    if (!id) return null; // Return an empty array if no id is provided
    const response = await axiosInstance.get("/api/trip-planner/trips/" + id);
    return response.data.trips;
  };
  return useQuery({
    queryFn: fetchTrips,
    queryKey: ["trips"],
    staleTime: 60,
  });
};
