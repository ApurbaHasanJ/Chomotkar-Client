import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page when the "Login" button is clicked
    navigate("/login", { state: { from: location }, replace: true });
  };

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  // If the user is not authenticated, render the login prompt
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center md:text-xl text-base shadow-xl bg-rose-100 p-8 ">
        <p>You have to login first.</p>
        <button
          className="btn p-3 px-5 duration-500 mt-4 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400"
          onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default PrivateRoute;
