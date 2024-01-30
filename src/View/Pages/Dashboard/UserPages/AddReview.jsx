import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MdRocketLaunch } from "react-icons/md";
import StarRatings from "react-star-ratings";
import SectionTitle from "../../../Shared/SectionTitle";
import toast from "react-hot-toast";
import { FaCircleUser, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCamera } from "react-icons/fa";
import Avatar from "react-avatar-edit";
import { UploadPhotos } from "../../../Shared/UploadCloudinary/UploadPhotos";
import Swal from "sweetalert2";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [reviewerPhoto, setReviewerPhoto] = useState("");

  // console.log(rating);

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

  // photo upload function
  const submitImage = async () => {
    try {
      const data = await UploadPhotos(img, "Users");
      // console.log(data);
      toast.success("photo uploaded successfully");
      setReviewerPhoto(data.img);
    } catch (error) {
      toast.error("Error uploading photo:", error);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      reviewerName,
      reviewerEmail,
      productName,
      suggestion,
      reviewDetails,
    } = data;

    const reviewData = {
      reviewerPhoto: reviewerPhoto || user?.photoURL,
      reviewerName,
      reviewerEmail,
      add: false,
      rating: rating,
      productName,
      suggestion,
      reviewDetails,
      createdAt: new Date(),
    };
    // console.log(reviewData);
    if (rating > 0) {
      fetch("https://chomotkar-server-iota.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewData),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setRating(0);
          setReviewerPhoto("");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      toast.error("Please select a rating before submitting your review.");
    }
  };
  return (
    <div className="mt-12 my-container">
      <SectionTitle
        title={"GIVE A REVIEW..."}
        subtitle={"---Sharing is Caring!!!---"}
      />

      <div className=" w-full">
        <div
          className="my-container md:text-base rounded-md text-xs md:pt-8 pt-5 my-10 w-full shadow-xl"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
          {/* Rating */}
          <div className="mt-5 grid gap-4 justify-center items-center">
            <h2 className="md:text-3xl text-2xl text-center font-semibold font-[Cinzel] whitespace-nowrap">
              Rate Us!
            </h2>
            {/* stars */}
            <StarRatings
              rating={rating}
              changeRating={(newRating) => setRating(newRating)}
              starRatedColor="#75934e"
              required
              totalStars={5}
              starDimension={"35px"}
              starSpacing={"4px"}
            />
            {rating === 0 && (
              <p className="text-red-500 text-center">
                Please Rate Us From Here
              </p>
            )}
          </div>
          <div className="   my-7 mt-0 lg:my-16 items-center">
            <div className="  md:px-10 px-2 pb-10 md:mx-3 lg:mx-0 rounded-lg mt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=" relative bg-gray-100 border-2 flex justify-center items-center border-[#D1A054] mx-auto md:w-[100px] md:h-[100px] w-14 h-14 rounded-full">
                  <div className="z-0 w-full h-full rounded-full">
                    {user ? (
                      <>
                        {user?.photoURL || reviewerPhoto ? (
                          <img
                            className="w-full h-full rounded-full"
                            src={reviewerPhoto || user?.photoURL}
                            alt={user?.displayName}
                          />
                        ) : (
                          <FaCircleUser className="w-full h-full text-slate-500" />
                        )}
                      </>
                    ) : (
                      <>
                        {reviewerPhoto ? (
                          <img
                            className="w-full h-full rounded-full"
                            src={reviewerPhoto}
                            alt="Your Photo"
                          />
                        ) : (
                          <FaCircleUser className="w-full h-full text-slate-500" />
                        )}
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleModal}
                    className={`h-1/2 w-full block bg-[#f4be6cc1] opacity-70 hover:block ${
                      !isHovered && "hidden"
                    } z-0 bg-slate-20 absolute bottom-0 transition-all left-0 rounded-tr-lg rounded-b-full`}>
                    <FaCamera className="w-4 h-4  mx-auto" />
                  </button>

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
                              <FaXmark className="text-base" />

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
                              type="button"
                              onClick={() => {
                                submitImage(), handleToggleModal();
                              }}
                              className="text-[#75934e] hover:bg-[#ebaf54] hover:shadow-2xl px-3 py-2">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid justify-center mb-4">
                  <label className="flex items-center text-center gap-1 font-medium text-slate-900 ">
                    <span className=" font-medium md:text-base text-sm">
                      Upload you photo
                    </span>
                    <span className="text-gray-600 text-xs">(optional)</span>
                  </label>
                </div>
                {/* Your name */}
                <div className="grid mb-4 ">
                  <label className="label justify-start font-medium text-slate-900 ">
                    <span className="label-text">
                      Please write here your name.
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="reviewerName"
                    {...register("reviewerName")}
                    required
                    defaultValue={user?.displayName}
                    placeholder="Your Name"
                    className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                  />
                </div>
                {/* Your name */}
                <div className="grid mb-2 ">
                  <label className="flex items-center text-center gap-1 font-medium text-slate-900 ">
                    <span className=" font-medium ">
                      Please write here your email.
                    </span>
                    <span className="text-gray-600 text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="reviewerEmail"
                    {...register("reviewerEmail")}
                    required
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                  />
                </div>
                {/* Product name */}
                <div className="grid mb-2 ">
                  <label className="label justify-start font-medium text-slate-900 ">
                    <span className="label-text">
                      Which product you liked most?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    {...register("productName")}
                    required
                    placeholder="Godzilla X Kong T-Shirt"
                    className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                  />
                </div>

                {/* suggestion for us */}
                <div className="grid mb-4 ">
                  <label className="label justify-start font-medium text-slate-900 ">
                    <span className="label-text">
                      Do you have any suggestion for us?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="suggestion"
                    name="suggestion"
                    {...register("suggestion")}
                    className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                    required
                    placeholder="Suggestion"
                  />
                </div>

                {/* Review details */}
                <div className="grid mb-4 ">
                  <label className="label justify-start font-medium text-slate-900 ">
                    <span className="label-text">
                      Kindly express your care in a short way.
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <textarea
                    name="reviewDetails"
                    {...register("reviewDetails")}
                    required
                    placeholder="Review in detail..."
                    className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                    rows="8"
                  />
                </div>

                <div className="flex flex-col justify-start mt-7">
                  <button
                    type="submit"
                    className="btn md:p-3 py-2 md:text-xl text-base px-4 text-center duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-[#47720f] flex items-center justify-center gap-2">
                    <span className=" font-semibold">Send Review</span>
                    <MdRocketLaunch className="md:text-2xl text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
