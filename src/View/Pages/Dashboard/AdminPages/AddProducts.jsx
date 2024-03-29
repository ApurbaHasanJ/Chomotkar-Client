import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import Uploading from "../../../Shared/Loader/Uploading";
import { UploadPhotos } from "../../../Shared/UploadCloudinary/UploadPhotos";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { DateTime } from "luxon";

// product sizes
const sizes = ["S", "M", "L", "XL", "XXL"];

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);

    // photos url here
    let photoUrls = [];
    // console.log(photoUrls);

    const {
      photos,
      title,
      productBy,
      productPrice,
      category,
      subCategory,
      colors,
      productQuantity,
      sizes,
      description,
    } = data;

    // Split the colors string into an array and remove leading/trailing spaces
    const colorArray = colors.split(",").map((color) => color.trim());

    // console.log("products:", productsArray);

    // Remove string from price
    const price = parseInt(productPrice);
    // Remove string from quantity
    const quantity = parseInt(productQuantity);

    try {
      setLoading(true);

      for (let i = 0; i < photos.length; i++) {
        const data = await UploadPhotos(photos[i], "Products");
        photoUrls.push(data);
      }

      // console.log(photoUrls);

      // Get the current date and time of the server
      const currentServerDateTime = DateTime.utc();

      // Set the locale to English
      const enDateTime = currentServerDateTime.setLocale("en");

      // Format the date and time in English language
      const formattedEnDateTime = enDateTime.toLocaleString({
        locale: "en",
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Dhaka", // You can adjust the timeZone as needed
      });

      // Set the state after the loop has completed
      if (photoUrls.length > 0) {
        const productData = {
          photos: photoUrls,
          title,
          productBy,
          price,
          colors: colorArray,
          category,
          quantity,
          subCategory,
          sizes,
          description,
          createdAt: formattedEnDateTime,
        };

        axiosSecure
          .post(`/products`, productData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.data)
          .then((data) => {
            // console.log(data);
            if (data?.insertedId) {
              setLoading(false);
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            setLoading(false);
            // console.log(err);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="min-h-screen  mt-12">
      <SectionTitle title={"ADD YOUR PRODUCT"} subtitle={"What's new?"} />

      <div className="my-container  my-8 md:my-16 ">
        <div className=" md:px-10 px-4 mx-1 bg-[#75934e] bg-opacity-60 py-10 lg:mx-0 rounded-lg">
          {loading ? (
            <Uploading />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {/* product name */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Product Name</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    {...register("title")}
                    required
                    placeholder="Product Name"
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                  />
                </div>
                {/* recipe price */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Price</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    {...register("productPrice")}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                    required
                    placeholder="Product Price"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {/* Category */}
                <div className="grid mb-4">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">Category</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <select
                    {...register("category", { required: true })}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]">
                    <option value="">None</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="gadgets">Gadget</option>
                  </select>
                </div>
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Sub Category</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <select
                    {...register("subCategory", { required: true })}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  ">
                    <option value="">None</option>
                    <option value="t-shirt">Premium T-Shirt</option>
                    <option value="polo shirt">Polo Shirt</option>
                    <option value="panjabi">Luxury Panjabi</option>
                    <option value="pants">Pants</option>
                    <option value="sari">Sari</option>
                    <option value="combo pack">Combo Pack</option>
                    <option value="three pieces">Three Pieces</option>
                    <option value="audio">Audio</option>
                    <option value="charger & cables">Charger & Cables</option>
                    <option value="power bank">Power Bank</option>
                    <option value="mobile accessories">
                      Mobile Accessories
                    </option>
                    <option value="multi hub">Multi Hub</option>
                    <option value="storage">Storage</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {/* Product By */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Product By</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="productBy"
                    {...register("productBy")}
                    required
                    placeholder="Product By"
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                  />
                </div>
                {/* Color */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Product Color</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="colors"
                    {...register("colors")}
                    required
                    placeholder="Product Colors"
                    className="input lowercase hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                  />
                </div>
                
              </div>
             <div className="grid sm:grid-cols-2 gap-3 mb-3">
              {/* Product Quantity */}
              <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Product Quantity</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="number"
                    name="productQuantity"
                    {...register("productQuantity")}
                    min={0}
                    required
                    placeholder="Product Quantity"
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                  />
                </div>
               {/* select sizes */}
               <div className="grid mb-5">
                <label className="label justify-start text-base font-medium text-slate-900">
                  <span className="label-text">Fashion Product Sizes</span>
                </label>
                <div className="sm:flex grid grid-cols-3 items-center justify-start sm:space-x-6 sm:space-y-0 space-y-3">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        id={size}
                        value={size}
                        className="w-6 h-6 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-[#47720f] focus:ring-orange-300"
                        {...register("sizes")}
                      />
                      <label htmlFor={size} className="ml-2 text-lg">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
             </div>
              {/* Recipe details */}
              <div className="grid mb-4">
                <label className="label justify-start text-base font-medium text-slate-900 ">
                  <span className="label-text">Product Details</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <textarea
                  {...register("description")}
                  required
                  placeholder="Your Product Details..."
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  "
                  rows="8"
                />
              </div>
              {/* Recipe photo */}
              <div className="grid mb-4">
                <label className="label justify-start text-base font-medium text-slate-900 ">
                  <span className="label-text">Upload Product Image</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  required
                  multiple={true}
                  className="  file-input hover:shadow-md border rounded-lg  border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  w-full max-w-xs"
                  type="file"
                  {...register("photos", { required: true })}
                />
              </div>

              <div className="grid mt-5">
                <input
                  type="submit"
                  value="ADD NOW"
                  className="btn p-3 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-[#47720f]"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
