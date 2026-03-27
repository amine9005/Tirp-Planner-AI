import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useHeroTextQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchHeroText = async () => {
    const response = await axios.get("/api/admin/hero/text");
    return response.data.hero;
  };
  return useQuery({
    queryFn: fetchHeroText,
    queryKey: ["hero-text"],
    staleTime: Infinity,
  });
};

export async function serverHeroTextQuery() {
  try {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/hero/text",
    );
    return response.data.hero;
  } catch (error) {
    console.log("Unable to get Hero Text", error);
    return {
      fullName: "Full Name",
      title: "Title",
      description: "Description",
      leftColor: "#ffffff",
      rightColor: "#ffffff",
    };
  }
}
