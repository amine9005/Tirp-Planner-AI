import { LogoSchemaType } from "@/validations/logo.zod";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useLogoQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchLogo = async () => {
    const response = await axios.get("/api/admin/logo");
    return response.data.logo;
  };
  return useQuery({
    queryFn: fetchLogo,
    queryKey: ["logo"],
    staleTime: Infinity,
  });
};

export async function serverLogoQuery(): Promise<LogoSchemaType> {
  try {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/logo",
    );
    return response.data.logo;
  } catch (error) {
    console.log("Unable to get Logo", error);
    return {
      imagePath: "",
      useImage: false,
      fullName: "Full Name",
      leftColor: "#ffffff",
      rightColor: "#ffffff",
    };
  }
}
