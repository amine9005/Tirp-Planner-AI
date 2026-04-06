import { getSession } from "@/helpers/authHelper.helper";
import { useQuery } from "@tanstack/react-query";

// Custom hook to fetch logo using React Query
export const useUserQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchSettings = async () => {
    const response = await getSession();

    return response ? response : null;
  };
  return useQuery({
    queryFn: fetchSettings,
    queryKey: ["user"],
    staleTime: 5,
  });
};
