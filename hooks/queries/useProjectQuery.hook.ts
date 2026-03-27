import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  id: string;
}
// Custom hook to fetch logo using React Query
export const useProjectsQuery = () => {
  // Define the API endpoint for fetching the logo
  const fetchProjects = async () => {
    const response = await axios.get("/api/admin/project");
    return response.data.projects;
  };
  return useQuery({
    queryFn: fetchProjects,
    queryKey: ["projects"],
    staleTime: Infinity,
  });
};

export async function serverProjectQuery() {
  try {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/project",
    );
    return response.data.projects;
  } catch (error) {
    console.log("Unable to get projects", error);
    return null;
  }
}

export const useGetProjectByIdQuery = (id: string) => {
  // Define the API endpoint for fetching the logo
  const fetchProject = async ({ id }: Props) => {
    const response = await axios.get("/api/admin/project/" + id);
    return response.data.project;
  };
  return useQuery({
    queryFn: () => fetchProject({ id }),
    queryKey: [id],
  });
};
