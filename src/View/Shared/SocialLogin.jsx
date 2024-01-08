import { BsGoogle } from "react-icons/bs";

import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SocialLogin = () => {
  const { continueWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  // google sign up
  const handleGoogleSignIn = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        // take data to database
        const userData = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
          role: "user",
          emailVerified: loggedUser?.emailVerified,
          metadata: { ...loggedUser?.metadata },
        };
        fetch("https://chomotkar-server-iota.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign in Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error login user",
          text: "Please try again.",
        });
      });
  };


  // Continue with facebook login
  //   const handleFacebookSignIn = () => {
  //     continueWithFacebook()
  //       .then((result) => {
  //         const loggedUser = result.user;
  //         console.log(loggedUser);
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Sign in Successfully",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Error login user",
  //           text: "Please try again.",
  //         });
  //       });
  //   };

  return (
    <div className=" w-full  flex gap-8 justify-center items-center btn-sec">
      {/* <button
        onClick={handleFacebookSignIn}
        className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
        <FaFacebookF className="w-6 h-6" />
      </button> */}
      <button
        onClick={handleGoogleSignIn}
        className="border-gray-700  w-full  p-3 flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-400 hover:border-rose-300 rounded-full border-2">
        <BsGoogle className="w-6 h-6" />
        <span className="text-center">Continue with google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
