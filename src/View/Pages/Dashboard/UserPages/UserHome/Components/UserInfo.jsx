import { useContext, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import useUsers from "../../../../../Hooks/useUsers";
import { FaUserEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  const [users, , refetch] = useUsers();
  const [axiosSecure] = useAxiosSecure();
  const [edit, setEdit] = useState(false);
  //   get current user
  const currentUser = users.find((u) => u?.email === user?.email);
  // console.log(currentUser?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(users);

  // console.log(user);

  // console.log(currentUser);

  const onSubmit = (data) => {
    const { name, email, phone, address } = data;
    const updatedInfo = { name, email, phone, address };

    axiosSecure
      .patch(`/users/info/${currentUser?._id}`, updatedInfo)
      .then((response) => {
        // console.log(response.data);
        if (response.data.modifiedCount > 0) {
          toast.success("Your info has been updated");
          setEdit(false);
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update your info. Please try again.");
      });
  };

  return (
    <div className="bg-[#FEF9C3] h-full p-10 border-[#D1A054] border-l-2">
      <div className="md:pl-20 pl-7">
        <div className="flex justify-between gap-6">
          <h2 className="md:text-3xl text-2xl  font-semibold  font-[Cinzel] whitespace-nowrap">
            Your Information
          </h2>
          {edit ? (
            <TiTick
              onClick={() => handleSubmit(onSubmit)()}
              className="md:text-3xl hover:text-[#47720f] text-2xl"
            />
          ) : (
            <FaUserEdit
              onClick={() => setEdit(!edit)}
              className="md:text-3xl hover:text-[#47720f] text-2xl"
            />
          )}
        </div>
        <div className="relative  mt-8 ">
          <div
            className={` ${
              edit ? "hidden" : "grid"
            } grid-cols-1 text-xl gap-3`}>
            <span>Name: {currentUser?.name}</span>
            <span>Email: {currentUser?.email}</span>
            <span>Phone: {currentUser?.phone || "None"}</span>
            <span>Address: {currentUser?.address || "None"}</span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={` absolute top-0 ${edit ? "left-0" : " hidden"}`}>
            <div className="grid mb-4">
              <input
                type="text"
                name="name"
                {...register("name", {
                  pattern: /^[A-Za-z\s]+$/i,
                })}
                placeholder="Your name"
                defaultValue={currentUser?.name}
                className="input hover:shadow-md border-none rounded-lg px-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
              />
            </div>
            <div className="grid mb-4">
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="Your email"
                value={currentUser?.email}
                // disabled
                className="input hover:shadow-md border-none rounded-lg px-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                autoComplete="username"
              />
            </div>
            <div className="grid mb-4">
              <input
                type="tel"
                name="phone"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Phone Number must be 11 characters",
                  },
                })}
                placeholder="Phone Number"
                defaultValue={currentUser?.phone}
                className="input hover:shadow-md border-none rounded-lg px-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                autoComplete="phone"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="grid mb-4">
              <input
                type="text"
                name="address"
                {...register("address")}
                placeholder="Address ..."
                defaultValue={currentUser?.address}
                className="input hover:shadow-md border-none rounded-lg px-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                autoComplete="address"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
