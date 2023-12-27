import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  //   const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  // show password
  const [show, setShow] = useState(false);

  // On change re captcha
  //   const onChange = (value) => {
  //     console.log("Captcha value", value);
  //     setDisabled(!disabled);
  //   };

  // login controls
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 px-6  bg-transparent z-20">
      <div className="my-container bg-[#e7c99c] pt-6 shadow-xl">
        <h3 className="font-mono lg:text-4xl md:text-3xl text-2xl text-slate-900 text-center font-bold md:mt-0 mt-8 mb-5">
          Login
        </h3>
        <p className="text-center text-slate-500">
          Please enter your e-mail and password:
        </p>
        <div className=" grid max-w-xl mx-auto  my-7 mt-0 lg:my-16 items-center">
          {/* Login Img */}

          <div className=" px-10 pb-10 mx-3 lg:mx-0 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  required
                  placeholder="Your email"
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                  aria-invalid={errors.email ? "true" : "false"}
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
                  required
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                    pattern: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.*[A-Z]).{6,}$/i,
                  })}
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password"
                />
                {errors.password && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.password?.message ||
                      "Password must be at least 6 characters long, contain at least one number, one special character, and one uppercase letter."}
                  </p>
                )}
              </div>
              <div className="grid my-3">
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
                <div className="grid justify-end">
                  <p className="text-xs font-slate-500 underline underline-offset-2 hover:text-rose-400">
                    Forgot your Password?
                  </p>
                </div>
              </div>

              <div className="grid mt-5">
                <input
                  //   disabled={disabled}
                  type="submit"
                  value="LOGIN"
                  className="btn p-3 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400"
                />
              </div>
            </form>
            <h6 className="text-center my-4 text-rose-400">
              New here?{" "}
              <Link to="/register" state={location.state}>
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
            <div className="grid  mt-4">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
