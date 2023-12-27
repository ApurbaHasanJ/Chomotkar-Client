import { useQuery } from "@tanstack/react-query";

const useCoupon = () => {
  const {
    isPending: couponsLoading,
    refetch,
    error,
    data: coupons = [],
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: () =>
      fetch("http://localhost:5000/coupons").then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [coupons, couponsLoading, refetch];
};

export default useCoupon;
