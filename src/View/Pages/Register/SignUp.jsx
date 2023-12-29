import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin";

const SignUp = () => {
  // show password
  const [show, setShow] = useState(false);

  // get auth Context
  const { createUser, userProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password } = data;
    // console.log(name, email, password);

    // create user functions
    createUser(email, password)
      .then((userCredential) => {
        userProfile(name)
          .then(() => {
            const loggedUser = userCredential.user;
            console.log("loggedUser", loggedUser);
            const userData = {
              name: loggedUser?.displayName,
              email: loggedUser?.email,
              role: "user",
              emailVerified: loggedUser?.emailVerified,
              metadata: { ...loggedUser?.metadata },
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Error updating profile",
              text: "Please try again.",
            });
          });
      })
      .catch((error) => {
        console.log(error);

        let errorMessage = "An error occurred. Please try again.";

        if (error.code) {
          // Extract the error code from the Firebase error
          const errorCode = error.code;

          // Customize error message based on the error code
          switch (errorCode) {
            case "auth/email-already-in-use":
              errorMessage = "This email is already in use.";
              break;

            // Add more cases for other error codes if needed
            default:
              // Use the default error message
              break;
          }
        }
        Swal.fire({
          icon: "error",
          title: errorMessage,
          text: "Please try again.",
        });
      });
  };

  return (
    <div className="pt-20 px-6  bg-transparent z-20">
      <div className="my-container bg-[#e7c99c] pt-6 shadow-xl">
        <h3 className="font-mono lg:text-4xl md:text-3xl text-2xl text-slate-900 text-center font-bold md:mt-0 mt-8 mb-5">
          Register
        </h3>
        <p className="text-center text-slate-500">
          Please fill in the fields below:
        </p>

        <div className="grid max-w-xl mx-auto  my-7 mt-0 lg:my-16 items-center">
          <div className=" px-10 pb-10 mx-3 lg:mx-0 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid mb-4">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: /^[A-Za-z\s]+$/i,
                  })}
                  placeholder="Your name"
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.name?.message ||
                      "Please enter a valid name using only letters."}
                  </p>
                )}
              </div>
              <div className="grid mb-4">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Your email"
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                  aria-invalid={errors.email ? "true" : "false"}
                  autoComplete="username"
                />
                {errors.email && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="grid mb-4">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                    pattern: /^(?=.*[0-9])(?=.*[A-Z]).{6,}$/,
                  })}
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400"
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {errors.password && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.password?.message ||
                      "Password must be at least 6 characters long, contain at least one number, and one uppercase letter."}
                  </p>
                )}
              </div>
              <div className="grid mb-4  my-3">
                <div className="flex items-center  mb-6">
                  <input
                    id="showPassword"
                    type="checkbox"
                    value={show}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                    onChange={(e) => setShow(e.target.checked)}
                  />
                  <label
                    htmlFor="showPassword"
                    className="ml-2 text-base font-medium text-slate-900 ">
                    Show password
                  </label>
                </div>
              </div>

              <div className="grid mb-4 mt-8">
                <input
                  // disabled={disabled}
                  type="submit"
                  value="CREATE"
                  className="btn p-3 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400"
                />
              </div>
            </form>
            <h6 className="text-center my-4 text-rose-400">
              New here?{" "}
              <Link to="/login" state={location.state}>
                <span className="  font-semibold hover:underline">
                  Create a New Account
                </span>
              </Link>
            </h6>
            <div className="flex justify-center items-center gap-5">
              <div className="border-b h-1 w-full border-gray-300"></div>
              <span className="text-xl">or</span>
              <div className="border-b h-1 w-full border-gray-300"></div>
            </div>
            <div className="form-control  mt-4">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
