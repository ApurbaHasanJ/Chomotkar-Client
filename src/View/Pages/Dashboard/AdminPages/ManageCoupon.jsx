import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useCoupon from "../../../Hooks/useCoupon";
import SectionTitle from "../../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import Loader from "../../../Shared/Loader/Loader";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageCoupon = () => {
  const [coupons, couponsLoading, refetch] = useCoupon();
  const [axiosSecure] = useAxiosSecure();
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    const { code, discount } = data;
    const discountPercentage = parseInt(discount);

    const couponCodes = {
      code,
      discount: discountPercentage,
    };

    axiosSecure
      .post("/coupons", couponCodes) // Use axiosSecure.post for creating a new coupon
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          reset();
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coupon added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // delete coupon
  const handleDeleteCoupon = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this coupon!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure
          .delete(`/coupons/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.acknowledged) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Coupon deleted from the list",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            // Handle errors and possibly show a notification
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `${err.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <section className=" pt-12 mb-10 min-h-screen bg-[#F6F6F6]">
      <SectionTitle
        title={"MANAGE ALL COUPONS"}
        subtitle={"---How Many!?---"}
      />

      {/* table and form */}
      <div className="grid md:grid-cols-2 items-start gap-9 my-container mt-16">
        {/* form */}
        <div>
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Add New Coupon or Promo Code
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-[#D1A054] p-10 text-sm text-left rtl:text-right rounded-lg text-gray-500">
            <div className="grid mb-4">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">CODE</span>
              </label>
              <input
                type="text"
                name="code"
                {...register("code")}
                required
                placeholder="Type coupon code"
                className="input hover:shadow-md uppercase border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
              />
            </div>
            <div className="grid mb-4">
              <label className="label text-base font-medium text-slate-900 ">
                <span className="label-text">DISCOUNT</span>
              </label>
              <input
                type="number"
                name="discount"
                {...register("discount")}
                required
                placeholder="Type discount percentage"
                className="input hover:shadow-md uppercase border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
              />
            </div>
            <div className="flex justify-end">
              <input
                type="submit"
                value={"APPLY COUPON"}
                className="border-black  border-2 px-5 py-3 text-xs rounded-lg text-white hover:text-black transition-all duration-1000 bg-black hover:bg-white"
              />
            </div>
          </form>
        </div>
        {/* table */}
        <div className="w-full">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Coupon: {coupons?.length}
          </h2>
          <div className="relative  overflow-x-auto shadow-md   rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
              <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
                <tr>
                  <th scope="col" className="p-8">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CODE
                  </th>

                  <th scope="col" className="px-6 py-3">
                    DISCOUNT
                  </th>

                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {couponsLoading ? (
                  <tr className="h-96">
                    <td className="">
                      <Loader />
                    </td>
                  </tr>
                ) : (
                  coupons.map((coupon, index) => (
                    <tr
                      key={coupon?._id}
                      className="bg-white border-b py-10 hover:bg-gray-50 ">
                      <td className="w-4 p-8">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {coupon?.code}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {coupon?.discount}
                      </th>

                      <td className=" px-6 py-4">
                        <MdDeleteForever
                          onClick={() => handleDeleteCoupon(coupon?._id)}
                          className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageCoupon;
