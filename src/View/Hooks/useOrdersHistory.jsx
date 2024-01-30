import { useQuery } from "@tanstack/react-query";
import useProducts from "./useProducts";
import { useContext } from "react";
import { OrdersHistoryContext } from "../Providers/OrdersHistoryProvider";

const useOrdersHistory = () => {
  const { ordersHistory } = useContext(OrdersHistoryContext);

  const [products] = useProducts();
  const {
    isFetching: ordersLoading,
    refetch,
    error,
    data: userOrders = [],
  } = useQuery({
    queryKey: ["userOrders"],
    queryFn: () =>
      fetch("https://chomotkar-server-iota.vercel.app/orders/user").then(
        (res) => res.json()
      ),
  });

  const orderedProducts = ordersHistory
    .map((order) => {
      const matchingOrders = userOrders.find(
        (userOrder) => userOrder?.createdAt === order?.date
      );

      if (matchingOrders) {
        const matchingProduct = products.find(
          (product) => product?._id === order.productId
        );

        if (matchingProduct) {
          return {
            ...order,
            userOrder: matchingOrders,
            product: matchingProduct,
          };
        }
      }
      return null;
    })
    .filter(Boolean);

  // console.log(orderedProducts);

  if (error) {
    return { error: "An error has occurred: " + error.message };
  }

  return { orderedProducts, ordersLoading, refetch };
};

export default useOrdersHistory;
