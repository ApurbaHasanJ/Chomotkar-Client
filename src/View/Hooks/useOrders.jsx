import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const {
    isPending: ordersLoading,
    refetch,
    error,
    data: orders = [],
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => axiosSecure.get("/orders/admin").then((res) => {
      // console.log(res);
      return res.data
    }),
    // queryFn: () =>
    //   fetch("https://chomotkar-server-iota.vercel.app/users",{headers:{
    //     authorization: `Bearer ${token}`
    //   }}).then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [orders, ordersLoading, refetch];
};

export default useOrders;
