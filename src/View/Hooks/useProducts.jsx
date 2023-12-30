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




//   const data = new FormData();
    //   data.append("file", img);
    //   data.append("upload_preset", "bistro_boss");
    //   data.append("cloud_name", "dxixdugif");
    //   console.log(data);

    //   fetch("https://api.cloudinary.com/v1_1/dxixdugif/image/upload", {
    //     method: "POST",
    //     body: data,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });