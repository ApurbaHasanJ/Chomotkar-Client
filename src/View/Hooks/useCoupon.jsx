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
      fetch("https://chomotkar-server-iota.vercel.app/coupons").then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [coupons, couponsLoading, refetch];
};

export default useCoupon;
