import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const {
    isPending: productsLoading,
    refetch,
    error,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });

  if(error){
    return "An error has occurred: " + error.message;
  }

  return [products, productsLoading, refetch];
};

export default useProducts;
