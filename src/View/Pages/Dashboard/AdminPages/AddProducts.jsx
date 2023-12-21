import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import Uploading from "../../../Shared/Loader/Uploading";

// product sizes
const sizes = ["S", "M", "L", "XL", "XXL"];

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    console.log(data);
    const { img, title, productBy, price, category, subCategory, color, sizes, description } = data;
    //  remove string from price
    const recipePrice = parseInt(price);

  //   if (!photos || !photos.length) {
  //     // Handle the case where no photos are selected
  //     console.error("No photos selected");
  //     setLoading(false);
  //     return;
  //   }

  //   const photo = photos[0];

  //   const newFromData = new FormData();
  //   newFromData.append("file", photo);
  //   newFromData.append("upload_preset", "bistro_boss");
  //   newFromData.append("cloud_name", "dxixdugif");
  //   newFromData.append("folder", "bistro-boss"); // Specify the folder name here
  //   console.log(photo);

  //   fetch("https://api.cloudinary.com/v1_1/dxixdugif/image/upload", {
  //     method: "POST",

  //     body: newFromData,
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`File upload failed: ${res.statusText}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const menuData = {
  //         name,
  //         recipe: recipeDetails,
  //         image: data.url,
  //         category,
  //         price: recipePrice,
  //       };
  //       console.log(menuData);
  //       if (data.url) {
  //         fetch("http://localhost:5000/menus", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(menuData),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.insertedId) {
  //               setLoading(false);
  //               reset();
  //               Swal.fire({
  //                 position: "top-end",
  //                 icon: "success",
  //                 title: "Menu Updated Successfully",
  //                 showConfirmButton: false,
  //                 timer: 1500,
  //               });
  //             }
  //           })
  //           .catch((err) => {
  //             setLoading(false);
  //             console.log(err);
  //             Swal.fire({
  //               position: "top-end",
  //               icon: "error",
  //               title: `${err.message}`,
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err);
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: `${err.message}`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     });
  };
  return (
    <section className="min-h-screen  mt-12">
      <SectionTitle title={"ADD YOUR PRODUCT"} subtitle={"What's new?"} />

      <div className="my-container my-8 md:my-16 pb-10">
        <div className=" md:px-10 mx-3 lg:mx-0 rounded-lg">
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
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
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
                    id="price"
                    min={0}
                    name="price"
                    {...register("price")}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
                    required
                    placeholder="Product Price"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {/* Category */}
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Category</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <select
                    {...register("category")}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
                    required>
                    <option value="none">None</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="electronics">Electronics</option>
                  </select>
                </div>
                <div className="grid mb-4 ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Sub Category</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <select
                    {...register("subCategory")}
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
                    required>
                    <option value="none">None</option>
                    <option value="t-shirt">Premium T-Shirt</option>
                    <option value="polo-shirt">Polo Shirt</option>
                    <option value="panjabi">Luxury Panjabi</option>
                    <option value="joggers">Joggers</option>
                    <option value="sari">Sari</option>
                    <option value="combo-pack">Combo-Pack</option>
                    <option value="three-pieces">Three-Pieces</option>
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
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
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
                    name="color"
                    {...register("color")}
                    required
                    placeholder="Product Color"
                    className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
                  />
                </div>
              </div>
              {/* select sizes */}
              <div className="grid mb-5">
                <label className="label justify-start text-base font-medium text-slate-900">
                  <span className="label-text">Fashion Product Sizes</span>
                </label>
                <div className="flex space-x-6">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        id={size}
                        value={size}
                        className="w-6 h-6 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                        {...register("sizes")}
                      />
                      <label htmlFor={size} className="ml-2 text-lg">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Recipe details */}
              <div className="grid mb-4">
                <label className="label justify-start text-base font-medium text-slate-900 ">
                  <span className="label-text">Product Details</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <textarea
                  name="Product Details"
                  {...register("description")}
                  required
                  placeholder="Your Product Details"
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  "
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
                  className="  file-input hover:shadow-md border rounded-lg  border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  w-full max-w-xs"
                  type="file"
                  {...register("img", { required: true })}
                />
              </div>

              <div className="grid mt-5">
                <input
                  type="submit"
                  value="Add NOW"
                  className="btn p-3 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400"
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
