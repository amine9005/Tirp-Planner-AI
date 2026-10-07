import { getSession } from "@/helpers/authHelper.helper";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

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

// export const useGetSubscriptionHook = () => {
//   const [data, setData] = useState("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null | unknown>(null);
//   const { data: userData, isLoading: isLoadingUserData } = useUserQuery();

//   useEffect(() => {
//     const getSubscription = async () => {
//       try {
//         setIsLoading(true);
//         const id = userData?.user.id;

//         if (!id) {
//           return null;
//         }
//         const resp = await axiosInstance.get("api/subscriptions/" + id);

//         // console.log("resp ", resp);
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         resp.data.subscription.map((sub: any) => {
//           if (sub.status === "active") {
//             setData(sub.plan);
//           }
//         });
//         setIsLoading(false);
//       } catch (error) {
//         console.log("error ", error);
//         setError(error);
//       }
//     };

//     getSubscription();
//   }, [userData]);

//   return {
//     data,
//     isLoading,
//     error,
//     isLoadingUserData,
//   };
// };

export const useGetSubscriptionQuery = (id: string | undefined) => {
  const getSubscription = async () => {
    if (!id) return null;
    const resp = await axiosInstance.get("api/subscriptions/" + id);
    let plan: string = "";
    let stripeSubscriptionId: string = "";
    let cancelAt: Date | null = null;

    // console.log("resp ", resp);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resp.data.subscription.map((sub: any) => {
      if (sub.status === "active") {
        plan = sub.plan as string;
        stripeSubscriptionId = sub.stripeSubscriptionId as string;
        cancelAt = sub.cancelAt;
      }
    });
    plan = plan ? plan : "free";
    return { plan, stripeSubscriptionId, cancelAt };
  };

  return useQuery({
    queryFn: getSubscription,
    queryKey: ["subscription"],
    staleTime: 5,
  });
};
