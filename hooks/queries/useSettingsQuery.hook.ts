import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom hook to fetch logo using React Query
export const useSettingsQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchSettings = async () => {
    const response = await axios.get("/api/admin/settings");
    return response.data.settings;
  };
  return useQuery({
    queryFn: fetchSettings,
    queryKey: ["settings"],
    staleTime: Infinity,
  });
};

export async function serverSettingsQuery() {
  try {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/settings",
    );
    return response.data.settings;
  } catch (error) {
    console.log("Unable to get Setting", error);
    return {
      copyright: "Full Name",
      primaryColor: "#fefefe",
      secondaryColor: "#f7f7f7",
      circleColor: "#fff",
    };
  }
}
