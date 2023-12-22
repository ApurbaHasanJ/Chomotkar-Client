import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    isPending: usersLoading,
    refetch,
    error,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [users, usersLoading, refetch];
};

export default useUsers;
