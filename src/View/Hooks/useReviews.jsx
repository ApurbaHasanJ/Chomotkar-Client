import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const {
    isPending: reviewsLoading,
    refetch,
    error,
    data: reviews = [],
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      fetch("https://chomotkar-server-iota.vercel.app/reviews").then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }
  return [reviews, reviewsLoading, refetch];
};

export default useReviews;
