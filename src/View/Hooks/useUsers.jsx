import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const {
    isPending: usersLoading,
    refetch,
    error,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => axiosSecure("/users").then((res) => {
      // console.log(res);
      return res.data
    }),
    // queryFn: () =>
    //   fetch("http://localhost:5000/users",{headers:{
    //     authorization: `Bearer ${token}`
    //   }}).then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [users, usersLoading, refetch];
};

export default useUsers;
