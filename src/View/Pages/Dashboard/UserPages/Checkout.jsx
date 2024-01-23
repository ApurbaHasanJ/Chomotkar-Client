import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCoupon from "../../../Hooks/useCoupon";
import Loader from "../../../Shared/Loader/Loader";
import { OrdersHistoryContext } from "../../../Providers/OrdersHistoryProvider";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { CartContext } from "../../../Providers/CartProvider";

const Checkout = ({ payCarts, modal, handleToggleModal }) => {
  const { handleAddToOrdersHistory } = useContext(OrdersHistoryContext);
  const { user } = useContext(AuthContext);

  // State for total price, delivery charge, and coupon discount
  const [coupons] = useCoupon();
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [discountedPercentage, setDiscountedPercentage] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [payBkash, setPayBkash] = useState(false);
  const [payNagad, setPayNagad] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const navigate = useNavigate();
  
  const { handleRemoveCart } = useContext(CartContext);

  // console.log(coupons);
  // Assuming the user entered coupon code
  const [enteredCouponCode, setEnteredCouponCode] = useState("");

  console.log(payCarts);

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
  }, [discountedPrice, deliveryCharge, payCarts, enteredCouponCode]);

  const handleApplyCoupon = () => {
    // Find the entered coupon in the array
    const matchedCoupon = coupons.find(
      (coupon) => coupon.code === enteredCouponCode
    );

    if (!payCarts?.userOrder) {
      if (matchedCoupon) {
        setDiscountedPercentage(matchedCoupon.discount);
        // Calculate the discounted price
        const discountPercentage = matchedCoupon?.discount / 100;
        const discountedPrice = subTotal * (1 - discountPercentage);
        setDiscountedPrice(discountedPrice);
        toast.success(`You got ${matchedCoupon?.discount}% discount.`);
      }
    } else {
      setDiscountedPercentage(0);
      // const discountedPrice = subTotal
      setDiscountedPrice(0);
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

  const handlePaymentMethodChange = (e) => {
    const { id } = e.target;

    // Set the corresponding state based on the selected payment method
    if (id === "cashOnDelivery") {
      setCashOnDelivery(true);
      setPayBkash(false);
      setPayNagad(false);
    } else if (id === "payBkash") {
      setPayBkash(true);
      setPayNagad(false);
      setCashOnDelivery(false);
    } else if (id === "payNagad") {
      setPayNagad(true);
      setPayBkash(false);
      setCashOnDelivery(false);
    }
  };

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

  const onSubmit = async (data) => {
    if (!payBkash && !payNagad && !cashOnDelivery) {
      toast.error("please select a payment method");
      return;
    }

    const order = {
      productId: payCarts._id,
      date: formattedEnDateTime,
      color: payCarts?.color || "none",
      size: payCarts?.size || "none",
      discount: discountedPercentage,
      quantity: payCarts?.quantity,
      price: discountedPrice
        ? discountedPrice + deliveryCharge
        : subTotal + deliveryCharge,
    };

    if (payCarts?.userOrder) {
      data.orderINV = payCarts?.userOrder?.INV;
      data.orderId = payCarts?.userOrder?._id;
    }
    data.productId = payCarts._id;
    data.color = payCarts?.color;
    data.size = payCarts?.size;
    data.quantity = payCarts?.quantity;
    data.couponCode = enteredCouponCode;
    data.date = formattedEnDateTime;
    data.totalAmount = payCarts?.userOrder?.totalAmount;

    // Set the payOnline property in the data object based on the payOnline condition
    data.paymentMethod =
      (payBkash && "bkash") ||
      (payNagad && "nagad") ||
      (cashOnDelivery && "COD");

    // Add to order history for both cash on delivery and online payment
    if (!payCarts.userOrder) {
      handleAddToOrdersHistory(order);
    }
    setLoading(true);

    try {
      const axiosData = await axios.post(
        "https://chomotkar-server-iota.vercel.app/payment",
        {
          data,
        }
      );

      // Log the response data within the then block
      // console.log("axiosData", axiosData);

      setLoading(false);

      // Redirect based on the payment method
      if (axiosData && axiosData.data.bkashURL) {
        handleRemoveCart(
          payCarts?._id,
          payCarts?.color,
          payCarts?.size
        )
        // Redirect to the provided URL for online payment
        window.location.replace(axiosData?.data?.bkashURL);
      } else if (axiosData && axiosData.data?.insertedId) {
        handleRemoveCart(
          payCarts?._id,
          payCarts?.color,
          payCarts?.size
        )
        // Redirect for cash on delivery
        // Adjust the URL as needed
        navigate("/order-received");
      }
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  return (
    <section className="my-container relative lg:pt-12 ">
      <Helmet>
        <title>Checkout | Chomotkar</title>
      </Helmet>
      <SectionTitle
        title={"Delivery & Billing"}
        subtitle={"---Place Order---"}
      />

      <RxCross2
        onClick={() => handleToggleModal(!modal)}
        className="text-rose-500 bg-rose-100 duration-500 rounded-lg hover:shadow-2xl drop-shadow-2xl md:text-5xl text-4xl ml-auto hover:bg-rose-100 p-1 md:p-2"
      />
      {loading ? (
        <div className="max-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="grid  bg-white shadow-md  md:px-10 p-3 pb-10 md:mx-3 lg:mx-0 rounded-lg my-7  lg:my-8 items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:flex gap-7 relative md:text-base text-xs">
            {/* 1st col */}
            <div className="w-full">
              {/* 1st row */}
              <div className="grid mb-3">
                <label className="flex items-center gap-1 font-medium text-slate-900 ">
                  <span className="uppercase font-medium ">Name</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  defaultValue={
                    payCarts?.userOrder?.cusName || user?.displayName || ""
                  }
                  type="text"
                  name="name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: /^[A-Za-z\s]+$/i,
                  })}
                  placeholder="Your name"
                  className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                  aria-invalid={errors.name ? "true" : "false"}
                />
              </div>
              <div className="grid mb-3">
                <label className="flex items-center gap-1 font-medium text-slate-900 ">
                  <span className="uppercase font-medium ">Phone</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  defaultValue={payCarts?.userOrder?.cusPhone || ""}
                  type="tel"
                  name="phone"
                  {...register("phone", {
                    required: true,
                    // Regular expression for exactly 11 digits
                    pattern: /^\d{11}$/,
                  })}
                  required
                  placeholder="Your phone"
                  className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                />
              </div>

              {/* 2nd row */}
              <div className="grid mb-3">
                <label className="flex items-center gap-1 mb-1 font-medium text-slate-900 ">
                  <span className="uppercase font-medium">Email</span>
                  <span className="text-gray-600 text-xs">(optional)</span>
                </label>
                <input
                  defaultValue={
                    payCarts?.userOrder?.cusEmail || user?.email || ""
                  }
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Your email"
                  className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                />
              </div>
              <div className="grid mb-3">
                <label className="flex items-center gap-1 justify-start font-medium text-slate-900 ">
                  <span className="uppercase font-medium ">
                    Location
                  </span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <select
                  defaultValue={payCarts?.userOrder?.cusLocation || ""}
                  {...register("location")}
                  required
                  onChange={(e) => handleDeliveryCharge(e.target.value)}
                  className="input md:text-base text-xs hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  ">
                  <option value="">None</option>
                  <option value="insideDhaka">Inside Dhaka</option>
                  <option value="outsideDhaka">Outside Dhaka</option>
                </select>
              </div>
              {/* 3rd row */}
              <div className="grid mb-4">
                <label className="flex items-center gap-1 font-medium text-slate-900 ">
                  <span className="uppercase font-medium ">
                    Address
                  </span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  defaultValue={payCarts?.userOrder?.cusAdd || ""}
                  type="address"
                  name="address"
                  {...register("address", {
                    required: "Name is required",
                  })}
                  placeholder="Type your full address..."
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                />
              </div>

              <div className="grid mb-4">
                <label className="flex items-center gap-1 font-medium text-slate-900 mb-1">
                  <span className="uppercase font-medium ">
                    Order Note
                  </span>
                  <span className="text-gray-600 text-xs">(optional)</span>
                </label>
                <input
                  type="orderNote"
                  name="orderNote"
                  {...register("orderNote")}
                  placeholder="Additional information"
                  className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                />
              </div>
              {/* payment method */}
              <div>
                <h2 className="text-gray-700 font-semibold lg:text-2xl text-lg">
                  PAYMENT METHOD
                </h2>
                <div className="grid md:mx-0 mx-11 md:grid-cols-3 grid-cols-2 gap-8 border-t-2 border-gray-600 pt-3 mt-3">
                  {/* cash on delivery */}
                  <label
                    className="flex items-start gap-3"
                    htmlFor="cashOnDelivery">
                    <input
                      type="radio"
                      className="w-5 h-5 border border-gray-500 rounded bg-gray-50 focus:ring-2 checked:bg-[#47720f] focus:ring-orange-300"
                      name="paymentMethod"
                      id="cashOnDelivery"
                      checked={cashOnDelivery}
                      onChange={handlePaymentMethodChange}
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Cash on Delivery</span>
                      <img
                        className="mt-2"
                        src="https://res.cloudinary.com/dxixdugif/image/upload/v1704215344/chomotkar-fashion/cash-on-delivery-png-17_ja3w9k.png"
                        alt=""
                      />
                    </div>
                  </label>
                  {/* pay with bkash */}
                  <label className="flex items-start gap-3" htmlFor="payBkash">
                    <input
                      type="radio"
                      className="w-5 h-5 border border-gray-500 rounded bg-gray-50 focus:ring-2 checked:bg-[#47720f] focus:ring-orange-300"
                      name="paymentMethod"
                      id="payBkash"
                      checked={payBkash}
                      onChange={handlePaymentMethodChange}
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Pay With bKash</span>
                      <img
                        className="mt-2 border rounded-lg "
                        src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704898656/Chomotkar/PaymentImg/BKash-bKash2-Logo.wine_i3b6az.png"
                        alt=""
                      />
                    </div>
                  </label>
                  {/* pay with nagad */}
                  {/* <label className="flex items-start gap-3" htmlFor="payNagad">
                    <input
                      type="radio"
                      className="w-5 h-5 border border-gray-500 rounded bg-gray-50 focus:ring-2 checked:bg-[#47720f] focus:ring-orange-300"
                      name="paymentMethod"
                      id="payNagad"
                      checked={payNagad}
                      onChange={handlePaymentMethodChange}
                    />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Pay With Nagad</span>
                      <img
                        className="mt-2 border rounded-lg "
                        src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704898656/Chomotkar/PaymentImg/Nagad-Log_iudiof.png"
                        alt=""
                      />
                    </div>
                  </label> */}
                </div>
              </div>
              {/* order button */}
              <div className=" lg:grid hidden  mt-5">
                <input
                  type="submit"
                  value="PLACE ORDER"
                  className="btn p-3 px-5 duration-500 rounded-full border-none text-white bg-[#75934e] hover:bg-[#47720f]"
                />
              </div>
            </div>
            {/* col 2 */}
            <div className="w-full my-4">
              {/* product photo with size and color */}
              <div className="bg-slate-100 p-4 text-sm">
                <div className="flex items-center gap-4">
                  <img className="w-20" src={payCarts?.photos[0]?.img} alt="" />
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-2">
                      <span>Size:</span>
                      <span className="uppercase">{payCarts?.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Quantity:</span>
                      <span className="uppercase">{payCarts?.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Color: </span>
                      <span
                        style={{ backgroundColor: payCarts?.color }}
                        className="w-3 h-3 rounded-full border-2 border-slate-400"></span>
                      <span className="capitalize">{payCarts?.color}</span>
                    </div>
                  </div>
                </div>
                <h3>Product: {payCarts?.title}</h3>
              </div>
              {/* product pricing details */}
              <div className="p-4 bg-slate-100 md:text-lg text-sm my-4">
                <div className={`${payCarts}`}>
                  {/* price */}
                  <div className="font-medium capitalize  flex items-center justify-between">
                    <span className="">Price:</span>
                    {payCarts?.newPrice ? (
                      <div className="flex justify-start items-start gap-2">
                        <span className="line-through">
                          TK.{payCarts?.price}
                        </span>
                        <span className="font-semibold">
                          TK.{payCarts?.newPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="font-semibold">
                        Tk.{payCarts?.price}
                      </span>
                    )}
                  </div>
                  <div className="font-medium capitalize pb-2 border-b border-gray-400  flex items-center justify-between">
                    <span className="">Quantity:</span>
                    <span>{payCarts?.quantity}</span>
                  </div>
                  {/* sub total */}
                  <div className="font-medium capitalize  flex items-center justify-between">
                    <span className="">Sub Total:</span>
                    {payCarts?.newPrice ? (
                      <div className="flex whitespace-nowrap justify-start items-start ml-4 gap-2">
                        <span className="line-through">
                          Tk.{payCarts?.price * payCarts?.quantity}
                        </span>
                        <span className="font-semibold">
                          Tk.
                          {payCarts?.userOrder?.totalAmount ||
                            payCarts?.newPrice * payCarts?.quantity}
                        </span>
                      </div>
                    ) : (
                      <span className="font-semibold ml-4">
                        Tk.
                        {payCarts?.userOrder?.totalAmount ||
                          payCarts?.price * payCarts?.quantity}
                      </span>
                    )}
                  </div>
                  <div className="font-medium capitalize pb-2 border-b border-gray-400  flex items-center justify-between">
                    <span className="">Discount Percentage:</span>
                    <span>-{discountedPercentage || 0}%</span>
                  </div>
                  <div className="font-medium capitalize pb-2  flex items-center justify-between">
                    <span className="">Discounted Price:</span>
                    <span>{discountedPrice}</span>
                  </div>
                  <div className="font-medium capitalize pb-2 border-b border-gray-400  flex items-center justify-between">
                    <span className="">Delivery Charge</span>
                    <span>+{deliveryCharge}</span>
                  </div>
                </div>

                <div className="font-medium capitalize py-2 border-b border-gray-400  flex items-center justify-between">
                  <span className="">Total Amount:</span>
                  <span className="underline underline-offset-4">
                    Tk.
                    {payCarts?.userOrder?.totalAmount
                      ? payCarts?.userOrder?.totalAmount
                      : discountedPrice
                      ? discountedPrice + deliveryCharge
                      : subTotal + deliveryCharge}
                  </span>
                </div>
              </div>
              {/* Coupon code input */}
              <div className="flex justify-end gap-4 w-full">
                <input
                  className="hover:shadow-md text-sm border uppercase border-[#75934e] placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f]  w-full max-w-xs"
                  type="text"
                  name="couponCode"
                  value={enteredCouponCode}
                  onChange={(e) =>
                    setEnteredCouponCode(e.target.value.toUpperCase())
                  }
                  placeholder="Coupon code"
                />
                <button
                  type="button"
                  onClick={() => handleApplyCoupon()}
                  className="border-[#75934e]  border-2 md:px-5 px-3 md:py-3 text-white hover:text-[#75934e] transition-all duration-1000 bg-[#75934e] hover:bg-white">
                  APPLY COUPON
                </button>
              </div>
            </div>
            <div className="lg:hidden  mt-10">
              <input
                type="submit"
                value="PLACE ORDER"
                className="btn p-3 px-5 duration-500 w-full rounded-full border-none text-white bg-[#75934e] hover:bg-[#47720f]"
              />
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Checkout;
