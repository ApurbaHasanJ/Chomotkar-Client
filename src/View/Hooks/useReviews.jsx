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
      fetch("http://localhost:5000/reviews").then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }
  return [reviews, reviewsLoading, refetch];
};

export default useReviews;
