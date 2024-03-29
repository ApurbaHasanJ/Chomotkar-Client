import { FaCamera } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { FaCircleUser, FaX } from "react-icons/fa6";

import toast from "react-hot-toast";
import Avatar from "react-avatar-edit";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { UploadPhotos } from "../../../../../Shared/UploadCloudinary/UploadPhotos";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const { user, userProfile, refreshUserProfile } = useContext(AuthContext);
  const [img, setImg] = useState("");
  // console.log(user);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // profile photo update modal
  const handleToggleModal = () => {
    // console.log("Toggle Modal Clicked");
    setModal(!modal);
  };

  const onClose = () => {
    setImg("");
  };

  const onCrop = (view) => {
    // console.log(view);
    setImg(view);
  };

  const submitImage = async () => {
    try {
      const data = await UploadPhotos(img, "Users");
      // console.log(data);

      if (data.img && user) {
        // console.log(data);
        try {
          await userProfile(user.displayName, data.img);
          refreshUserProfile();

          toast.success("Photo uploaded successfully");

          setModal(false);
        } catch (error) {
          // console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error updating profile",
            text: "Please try again.",
          });
        }
      }
    } catch (error) {
      toast.error("Error uploading photo:", error);
    }
  };

  return (
    <div className="grid sm:grid-cols-2 items-center justify-center mt-8 font-[Cinzel]">
      <div className="bg-[#FFEDD5] grid justify-center items-center p-10 border-[#D1A054] border-r-2">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" relative bg-gray-100 border-2 flex justify-center items-center border-[#D1A054] mx-auto w-[200px] h-[200px] rounded-full">
          <div className="z-0 w-full h-full rounded-full">
            {user?.photoURL ? (
              <img
                className="w-full h-full rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            ) : (
              <FaCircleUser className="w-full h-full text-slate-500" />
            )}
          </div>
          <button
            type="button"
            onClick={handleToggleModal}
            className={`h-1/2 w-full block bg-[#f4be6cc1] opacity-70 hover:block ${
              !isHovered && "hidden"
            } z-0 bg-slate-20 absolute bottom-0 transition-all left-0 rounded-tr-lg rounded-b-full`}>
            <FaCamera className="w-8 h-8  mx-auto" />
          </button>
        </div>

        <p className="mt-11 text-center font-semibold md:text-3xl text-2xl font-[Cinzel] whitespace-nowrap">
          {user?.displayName}
        </p>

        {/* modal */}
        {modal && (
          <div
            className={`fixed mt-6 drop-shadow-2xl rounded-xl top-1/2 transform justify-center items-center -translate-y-1/2 left-1/2 -translate-x-1/2  z-[49] w-auto overflow-x-hidden overflow-y-auto max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative pb-4 bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Update Profile
                  </h3>
                  <button
                    onClick={handleToggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-[#75934e] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                    <FaX className="text-base" />

                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* modal body */}
                <div className="p-4 md:p-5 space-y-4 overflow-hidden">
                  {/* photo edit and crop functionalities and codes*/}
                  <div>
                    <Avatar
                      width={390}
                      height={295}
                      onCrop={onCrop}
                      onClose={onClose}
                    />
                  </div>
                </div>
                {/* modal footer */}
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      submitImage(), handleToggleModal();
                    }}
                    className="bg-[#75934e] bg-opacity-60 hover:bg-[#517521] hover:shadow-2xl px-3 py-2">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* user Information */}
      <UserInfo />
    </div>
  );
};

export default UserProfile;
