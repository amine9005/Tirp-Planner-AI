import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProjectRequestByIdQuery = (id: string) => {
  // Define the API endpoint for fetching the logo
  const fetchRequests = async ({ id }: { id: string }) => {
    const response = await axios.get("/api/admin/project/requests/" + id);
    return response.data.request;
  };
  return useQuery({
    queryFn: () => fetchRequests({ id }),
    queryKey: [id as string],
  });
};

export const useGetRequestsQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchRequests = async () => {
    const response = await axios.get("/api/admin/project/requests/");
    return response.data.requests;
  };
  return useQuery({
    queryFn: fetchRequests,
    queryKey: ["requests"],
  });
};
