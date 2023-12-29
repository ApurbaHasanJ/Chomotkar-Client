import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCoupon from "../../../Hooks/useCoupon";

const Checkout = ({ payCarts, modal, handleToggleModal }) => {
  // State for total price, delivery charge, and coupon discount
  const [coupons] = useCoupon();
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [discountedPercentage, setDiscountedPercentage] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  console.log(payCarts);

  // Assuming the user entered coupon code
  const [enteredCouponCode, setEnteredCouponCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Calculate total product price
    const productPrice = payCarts.newPrice ? payCarts.newPrice : payCarts.price;
    const subTotal = productPrice * payCarts.quantity;
    setSubTotal(subTotal);

    // Update total amount when discount or delivery charge changes
  }, [discountedPrice, deliveryCharge, payCarts]);

  const handleApplyCoupon = () => {
    // Find the entered coupon in the array
    const matchedCoupon = coupons.find(
      (coupon) => coupon.code === enteredCouponCode
    );

    if (matchedCoupon) {
      setDiscountedPercentage(matchedCoupon.discount);
      // Calculate the discounted price
      const discountPercentage = matchedCoupon.discount / 100;
      const discountedPrice = subTotal * (1 - discountPercentage);
      setDiscountedPrice(discountedPrice);
      toast.success(`You got ${matchedCoupon?.discount}% discount.`);
    } else {
      // Handle case where the entered coupon code is not found
      toast.error("Coupon not found");
    }
  };

  // Handle delivery charge
  const handleDeliveryCharge = (location) => {
    if (location === "outsideDhaka") {
      setDeliveryCharge(140);
      toast.success("Delivery charge added");
    }
    if (location === "insideDhaka") {
      setDeliveryCharge(40);
      toast.success("Delivery charge added");
    }
  };

  const onSubmit = (data) => {};

  return (
    <section className="my-container relative pt-12 ">
      <SectionTitle
        title={"Delivery & Billing"}
        subtitle={"---Place Order---"}
      />

      <RxCross2
        onClick={() => handleToggleModal(!modal)}
        className="text-rose-500 bg-rose-100 duration-500 rounded-lg hover:shadow-2xl drop-shadow-2xl md:text-6xl text-5xl ml-auto hover:bg-rose-100 p-2"
      />
      <div className="grid  bg-white shadow-md md:px-10 px-5 py-10 mx-3 lg:mx-0 rounded-lg my-7 mt-0 lg:my-8 items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex gap-7 relative">
          {/* 1st col */}
          <div className="w-full">
            {/* 1st row */}
            <div className="grid mb-4">
              <label className="flex items-center gap-1 text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">Name</span>
                <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required",
                  pattern: /^[A-Za-z\s]+$/i,
                })}
                placeholder="Your name"
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                aria-invalid={errors.name ? "true" : "false"}
              />
            </div>
            <div className="grid mb-4">
              <label className="flex items-center gap-1 text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">Phone</span>
                <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                {...register("phone")}
                required
                placeholder="Your phone"
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
              />
            </div>

            {/* 2nd row */}
            <div className="grid mb-4">
              <label className="flex items-center gap-1 text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">Email</span>
                <span className="text-gray-600 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Your email"
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            <div className="grid mb-4 ">
              <label className="flex items-center gap-1 justify-start text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">
                  Location
                </span>
                <span className="text-red-600 text-xl">*</span>
              </label>
              <select
                {...register("subCategory")}
                required
                onChange={(e) => handleDeliveryCharge(e.target.value)}
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  ">
                <option value="">None</option>
                <option value="insideDhaka">Inside Dhaka</option>
                <option value="outsideDhaka">Outside Dhaka</option>
              </select>
            </div>
            {/* 3rd row */}
            <div className="grid mb-4">
              <label className="flex items-center gap-1 text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">address</span>
                <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="address"
                name="address"
                {...register("address", {
                  required: "Name is required",
                })}
                placeholder="Type your full address..."
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
              />
            </div>

            <div className="grid mb-4">
              <label className="flex items-center gap-1 text-base font-medium text-slate-900 ">
                <span className="uppercase font-medium text-base">
                  Order Note
                </span>
                <span className="text-gray-600 text-xs">(optional)</span>
              </label>
              <input
                type="orderNote"
                name="orderNote"
                {...register("orderNote")}
                placeholder="Additional information"
                className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
              />
            </div>
            {/* payment method */}
            <div>
              <h2 className="text-gray-700 font-semibold text-2xl">
                PAYMENT METHOD
              </h2>
              <div className="grid md:gap-4 border-t-2 border-gray-600 pt-3 mt-3">
                <label
                  className="flex items-center gap-3"
                  htmlFor="cashOnDelivery">
                  <input
                    type="radio"
                    className="w-5 h-5 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                    name="paymentMethod"
                    id="cashOnDelivery"
                  />
                  <span>Cash on Delivery</span>
                </label>

                <label className="flex items-center gap-3" htmlFor="payOnline">
                  <input
                    type="radio"
                    className="w-5 h-5 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                    name="paymentMethod"
                    id="payOnline"
                  />
                  <span>Pay Online</span>
                </label>
              </div>
            </div>
            {/* order button */}
            <div className=" lg:grid hidden justify-end mt-5">
              <input
                type="submit"
                value="PLACE ORDER"
                className="btn p-3 px-5 duration-500 rounded-full border-none text-white bg-slate-500 hover:bg-rose-400"
              />
            </div>
          </div>
          {/* col 2 */}
          <div className="w-full sticky top-0 right-0">
            {/* product details */}
            <div className="p-4 bg-slate-100 my-4">
              {/* price */}
              <div className="font-medium capitalize text-lg flex items-center justify-between">
                <span className="">Price:</span>
                {payCarts?.newPrice ? (
                  <div className="flex justify-start items-start gap-2">
                    <span className="line-through">TK.{payCarts?.price}</span>
                    <span className="font-semibold">
                      TK.{payCarts?.newPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-semibold">Tk.{payCarts?.price}</span>
                )}
              </div>
              <div className="font-medium capitalize pb-2 border-b border-gray-400 text-lg flex items-center justify-between">
                <span className="">Quantity:</span>
                <span>{payCarts?.quantity}</span>
              </div>
              {/* sub total */}

              <div className="font-medium capitalize text-lg flex items-center justify-between">
                <span className="">Sub Total:</span>
                {payCarts?.newPrice ? (
                  <div className="flex whitespace-nowrap justify-start items-start ml-4 gap-2">
                    <span className="line-through">
                      Tk.{payCarts?.price * payCarts?.quantity}
                    </span>
                    <span className="font-semibold">
                      Tk.{payCarts?.newPrice * payCarts?.quantity}
                    </span>
                  </div>
                ) : (
                  <span className="font-semibold ml-4">
                    Tk.{payCarts?.price * payCarts?.quantity}
                  </span>
                )}
              </div>
              <div className="font-medium capitalize pb-2 border-b border-gray-400 text-lg flex items-center justify-between">
                <span className="">Discount Percentage:</span>
                <span>-{discountedPercentage}%</span>
              </div>
              <div className="font-medium capitalize pb-2 text-lg flex items-center justify-between">
                <span className="">Discounted Price:</span>
                <span>{discountedPrice}</span>
              </div>
              <div className="font-medium capitalize pb-2 border-b border-gray-400 text-lg flex items-center justify-between">
                <span className="">Delivery Charge</span>
                <span>+{deliveryCharge}</span>
              </div>

              <div className="font-medium capitalize py-2 border-b border-gray-400 text-lg flex items-center justify-between">
                <span className="">Total Amount:</span>
                <span className="underline underline-offset-4">
                  Tk.
                  {discountedPrice
                    ? discountedPrice + deliveryCharge
                    : subTotal + deliveryCharge}
                </span>
              </div>
            </div>
            {/* Coupon code input */}
            <div className="flex justify-end gap-4 w-full">
              <input
                className="hover:shadow-md border border-slate-500 placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400  w-full max-w-xs"
                type="text"
                name="couponCode"
                value={enteredCouponCode}
                onChange={(e) => setEnteredCouponCode(e.target.value)}
                placeholder="Coupon code"
              />
              <button
                type="button"
                onClick={() => handleApplyCoupon()}
                className="border-black border-2 px-5 py-3 text-xs text-white hover:text-black transition-all duration-1000 bg-black hover:bg-white">
                APPLY COUPON
              </button>
            </div>
          </div>
          <div className="lg:hidden  mt-10">
            <input
              type="submit"
              value="PLACE ORDER"
              className="btn p-3 px-5 duration-500 w-full rounded-full border-none text-white bg-[#D1A054] hover:bg-rose-400"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
