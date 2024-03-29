import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://chomotkar-server-iota.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      // console.log("Token:", token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response.status &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
