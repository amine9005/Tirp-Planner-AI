import { getSession } from "@/helpers/authHelper.helper";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Custom hook to fetch User using React Query
export const useUserQuery = () => {
  // Define the API endpoint for fetching the User
  const fetchUser = async () => {
    const response = await getSession();

    return response ? response : null;
  };
  return useQuery({
    queryFn: fetchUser,
    queryKey: ["user"],
    staleTime: 5,
  });
};

export const useGetSubscriptionHook = () => {
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { data, error } = useGetSubscriptionQuery(userId);

  useEffect(() => {
    const getUserId = async () => {
      setLoading(true);
      const resp = await getSession();
      if (!resp) return;
      setUserId(resp.user.id);
      if (userId && (data || error)) {
        setLoading(false);
      }
    };

    getUserId();
  }, [data, userId, error]);

  return { data, loading, error };
};

export const useGetSubscriptionQuery = (id: string) => {
  const [subscription, setSubscription] = useState("");

  const getSubscription = async ({ id }: { id: string }) => {
    const resp = await axiosInstance.get("api/subscriptions/" + id);

    console.log("resp ", resp);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resp.data.subscription.map((sub: any) => {
      if (sub.status === "active") {
        setSubscription(sub.plan);
      }
    });
    return subscription;
  };

  return useQuery({
    queryFn: () => getSubscription({ id }),
    queryKey: ["subscription"],
    staleTime: 5,
  });
};
