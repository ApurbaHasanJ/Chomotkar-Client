import { MdAdminPanelSettings, MdDeleteForever } from "react-icons/md";

import { FaUser, FaUserEdit, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import SectionTitle from "../../../Shared/SectionTitle";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";

const ManageUsers = () => {
  const [users, , refetch] = useUsers();
  const [userId, setUserId] = useState(null);
  const [axiosSecure] = useAxiosSecure();

  const handleUsersRole = (user, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to change ${user.name}'s role to ${role}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Change!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user?._id}`, {
            role: role,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              setUserId("");
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name}'s role is now ${role}!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure
          .delete(`/users/${user?._id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.acknowledged) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} deleted from the list`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  // console.log(users);
  return (
    <section className=" py-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"MANAGE ALL USERS"} subtitle={"---How Many!?---"} />

      {/* table */}
      <div className="my-container mt-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Users: {users?.length}
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8"></th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr
                    key={user?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {user?.name}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {user?.email}
                    </th>
                    <td className="px-6 py-4 ">
                      <div className="relative">
                        {user?.role === "user" ? (
                          <FaUserEdit
                            title={user?.role}
                            onClick={() => setUserId(user?._id)}
                            className={`bg-[#D1A054] hover:bg-[#f15e5e] ${
                              userId === user._id ? "hidden" : "block"
                            } p-1 rounded-md text-white text-[32px]`}
                          />
                        ) : (
                          <MdAdminPanelSettings
                            onClick={() => setUserId(user?._id)}
                            title={user?.role}
                            className={`bg-[#D1A054] hover:bg-[#f15e5e] ${
                              userId === user._id ? "hidden" : "block"
                            } p-1 rounded-md text-white text-[32px]`}
                          />
                        )}
                        <div className="absolute right-0 -top-3 z-10">
                          {userId === user._id && (
                            <div className="flex relative flex-col text-base  p-3 bg-white shadow-md border rounded-md">
                              <RxCross2
                                onClick={() => setUserId("")}
                                className="absolute -right-2 -top-2 text-red-600 bg-red-100 shadow-md text-xl rounded-full"
                              />

                              <button
                                type="button"
                                onClick={() => {
                                  handleUsersRole(user, "user");
                                }}
                                disabled={user?.role === "user"}
                                className={`flex items-center gap-1 p-2 ${
                                  user?.role === "user"
                                    ? "bg-red-50"
                                    : "hover:bg-gray-50"
                                } `}>
                                <FaUser />
                                <span className="text-xs whitespace-nowrap">
                                  Make User
                                </span>
                              </button>
                              <hr />
                              <button
                                type="button"
                                onClick={() => {
                                  handleUsersRole(user, "admin");
                                }}
                                disabled={user?.role === "admin"}
                                className={`flex items-center gap-1 p-2 ${
                                  user?.role === "admin"
                                    ? "bg-red-50"
                                    : "hover:bg-gray-50"
                                } `}>
                                <FaUserShield className="text-lg" />
                                <span className="text-xs whitespace-nowrap">
                                  Make Admin
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className=" px-6 py-4">
                      <MdDeleteForever
                        onClick={() => handleDeleteUser(user)}
                        className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageUsers;
