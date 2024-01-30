import { MdDeleteForever } from "react-icons/md";
import useReviews from "../../../Hooks/useReviews";
import SectionTitle from "../../../Shared/SectionTitle";
import { FaCircleUser } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import StarRatings from "react-star-ratings";
import Loader from "../../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageReviews = () => {
  const [reviews, reviewsLoading, refetch] = useReviews();
  const [toggleModal, setToggleModal] = useState(false);
  const [review, setReview] = useState({});

  const [axiosSecure] = useAxiosSecure();
  // console.log(reviews);

  const handleViewFullDetails = (review) => {
    setReview(review);
    setToggleModal(!toggleModal);
  };

  const handleAddReview = (id, decision) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add a new review?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Change!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/reviews/${id}`, {
            add: decision,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Review added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            // console.log(error);
          });
      }
    });
  };

  // delete user
  const handleDeleteReview = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this review!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure
          .delete(`/reviews/${review?._id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.acknowledged) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${review.reviewerName} deleted from the list`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            // console.log(err);
          });
      }
    });
  };

  return (
    <>
      <section className=" pt-12 min-h-screen bg-[#F6F6F6]">
        <SectionTitle
          title={"MANAGE ALL REVIEWS"}
          subtitle={"---How Many!?---"}
        />

        {/* table */}
        <div className="my-container relative mt-20">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Reviews: {reviews?.length}
          </h2>
          <div className="relative  overflow-x-auto shadow-md   rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
              <thead className="text-xs  text-white uppercase bg-[#75934e] bg-opacity-60  ">
                <tr>
                  <th scope="col" className="p-8"></th>
                  <th scope="col" className="px-6 py-3">
                    Photo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Added
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DETAILS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviewsLoading ? (
                  <tr>
                    <td>
                      <Loader />
                    </td>
                  </tr>
                ) : (
                  reviews.map((review, index) => (
                    <tr
                      key={review?._id}
                      className="bg-white border-b py-10 hover:bg-gray-50 ">
                      <td className="w-4 p-8">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {review?.reviewerPhoto ? (
                          <img
                            className="md:w-16 h-full object-cover w-12"
                            src={review?.reviewerPhoto}
                            alt={review?.title}
                            title={review?.title}
                          />
                        ) : (
                          <FaCircleUser className="md:w-16 h-full w-12 text-slate-500" />
                        )}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {review?.reviewerName}
                      </th>

                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {review?.rating}
                      </th>
                      <th scope="row" className="px-6 py-4  whitespace-nowrap">
                        <span
                          className={`py-2 px-3 font-medium ${
                            review?.add == true
                              ? "bg-green-400"
                              : "bg-slate-400"
                          } text-gray-900 rounded-full whitespace-nowrap `}>
                          {review?.add == true ? "Added" : "None"}
                        </span>
                      </th>
                      <td className=" px-6 py-4">
                        <FaCircleInfo
                          onClick={() => handleViewFullDetails(review)}
                          className="text-[#75934e] hover:text-[#507125]  rounded-md  text-3xl"
                        />
                      </td>
                      <td className=" px-6 py-4">
                        <MdDeleteForever
                          onClick={() => handleDeleteReview(review)}
                          className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* review card */}
          {toggleModal && (
            <div className="w-full max-w-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                <button
                  id=""
                  data-dropdown-toggle=""
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button">
                  <RxCross2
                    onClick={() => setToggleModal(!toggleModal)}
                    className="text-rose-500 bg-rose-100 duration-500 rounded-lg hover:shadow-2xl drop-shadow-2xl md:text-3xl text-2xl ml-auto hover:bg-rose-100 p-[.5px]"
                  />
                </button>
              </div>
              <div className="flex flex-col items-center pb-10 px-3">
                {review?.reviewerPhoto ? (
                  <img
                    className="md:w-16 md:h-full object-cover w-12 mb-3 rounded-full shadow-lg"
                    src={review?.reviewerPhoto}
                    alt={review?.reviewerName}
                    title={review?.reviewerName}
                  />
                ) : (
                  <FaCircleUser className="md:w-16 md:h-full mb-3 rounded-full shadow-lg object-cover w-12 text-slate-500" />
                )}
                <h5 className=" text-xl font-medium text-center text-gray-900 dark:text-white">
                  {review?.reviewerName}
                  <div className="flex gap-2 items-center justify-center">
                    <StarRatings
                      starRatedColor="yellow"
                      rating={review?.rating}
                      starDimension="20px"
                      starSpacing="5px"
                    />
                    <span className=" -mb-1 font-medium text-gray-900 whitespace-nowrap text-base">
                      ({review?.rating})
                    </span>
                  </div>
                </h5>
                <div className="text-left border-b pb-2 border-slate-500 font-mono mt-3">
                  <span className="font-bold">Suggestion:</span>{" "}
                  <span>{review?.suggestion}</span>
                </div>

                <div className="text-center flex flex-col font-mono mt-3">
                  <span className="font-bold underline underline-offset-2">
                    Review:
                  </span>
                  <span>{review?.reviewDetails}</span>
                </div>
                <div className="flex mt-4 md:mt-6">
                  {review?.add === true ? (
                    <button
                      type="button"
                      onClick={() => {
                        handleAddReview(review?._id, false),
                          setToggleModal(!toggleModal);
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#75934e] bg-opacity-60  rounded-lg hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Remove Review
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        handleAddReview(review?._id, true),
                          setToggleModal(!toggleModal);
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#75934e] bg-opacity-60  rounded-lg hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Add Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ManageReviews;
