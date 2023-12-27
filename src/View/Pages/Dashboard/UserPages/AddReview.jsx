import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRocketLaunch } from "react-icons/md";
import StarRatings from "react-star-ratings";
import SectionTitle from "../../../Shared/SectionTitle";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-12 my-container">
      <SectionTitle
        title={"GIVE A REVIEW..."}
        subtitle={"---Sharing is Caring!!!---"}
      />

      <div className=" ">
        <div
          className="my-container py-10 my-20 shadow-xl"
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
              starRatedColor="gold"
              required
              totalStars={5}
              starDimension={"40px"}
              starSpacing={"4px"}
            />
          </div>
          <div className="   my-7 mt-0 lg:my-16 items-center">
            <div className=" px-10 mx-3 lg:mx-0 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* recipe name */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
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
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                  />
                </div>

                {/* recipe price */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">
                      Do you have any suggestion for us?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="suggestion"
                    name="suggestion"
                    {...register("suggestion")}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                    required
                    placeholder="Suggestion"
                  />
                </div>

                {/* Recipe details */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
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
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
                    rows="8"
                  />
                </div>

                <div
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-start mt-7 ">
                  <button
                    disabled={rating === 0}
                    type="submit"
                    {...register("submit")}
                    // disabled={disabled}
                    className="btn p-3 px-4 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400 flex items-center justify-center gap-2">
                    <span className="text-xl font-semibold">Send Review</span>
                    <MdRocketLaunch className=" text-2xl md:mx-0 mx-auto" />
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
