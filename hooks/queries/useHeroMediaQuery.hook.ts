import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useHeroMediaQuery = () => {
  // Define the API endpoint for fetching the logo
  const getHeroMedia = async () => {
    const response = await axios.get("/api/admin/hero/media");
    return response.data.hero;
  };
  return useQuery({
    queryFn: getHeroMedia,
    queryKey: ["hero-media"],
    staleTime: Infinity,
  });
};

export async function serverHeroMediaQuery() {
  try {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/hero/media",
    );
    return response.data.hero;
  } catch (error) {
    console.log("Unable to get Hero Media", error);
    return {
      displayType: "image",
      videoSource: "Youtube",
      imageUrl: "47741661.png",
      videoUrl: "https://www.example.com/video.mp4",
      videoFileName: "example.mp4",
      model3D_Url: "https://www.example.com/model3d.obj",
    };
  }
}
