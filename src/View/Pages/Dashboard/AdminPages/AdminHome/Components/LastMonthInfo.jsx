import { FaWallet } from "react-icons/fa";
import useOrders from "../../../../../Hooks/useOrders";
import { DateTime } from "luxon";
import useReviews from "../../../../../Hooks/useReviews";
import { FaStar } from "react-icons/fa6";

const LastMonthInfo = () => {
  const [orders, ,] = useOrders();
  const [reviews, ,] = useReviews();

  // Define a function to calculate the total sales revenue
  const calculateTotalSalesRevenue = (filteredOrders) => {
    return filteredOrders.reduce((totalRevenue, order) => {
      return totalRevenue + order.totalAmount; // Replace 'salesRevenue' with the actual property name in your order object
    }, 0);
  };

  // Filter orders for the last month
  const filteredOrders = orders.filter((order) => {
    const orderDate = DateTime.fromFormat(
      order.createdAt,
      "EEEE, MMMM d, yyyy 'at' h:mm:ss a"
    );
    const lastMonthStart = DateTime.local()
      .minus({ months: 1 })
      .startOf("month");
    const lastMonthEnd = DateTime.local().minus({ months: 1 }).endOf("month");

    // Check if the order date is within the last month
    return (
      orderDate >= lastMonthStart &&
      orderDate <= lastMonthEnd &&
      order.orderStatus === "confirmed" &&
      order.paidStatus === true
    );
  });

//   console.log(filteredOrders);

  // Calculate total sales revenue for the last month
  const totalSalesRevenueLastMonth = calculateTotalSalesRevenue(filteredOrders);

//   console.log("Total Sales Revenue Last Month:", totalSalesRevenueLastMonth);

  return (
    <div className="bg-white w-3/6 h-fit shadow-2xl shadow-purple-200 drop-shadow-2xl rounded-xl p-10 ">
      <h2 className="text-purple-600 mb-6 font-semibold text-2xl drop-shadow-2xl">
        Last Month Sales Revenue & Total Reviews
      </h2>
      <div className="flex gap-4">
        <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
          <FaWallet className="w-12 h-12 md:mx-0 mx-auto" title="Wallet" />

          <div>
            <h1 className="text-3xl ">{totalSalesRevenueLastMonth}</h1>
            <p className="text-xl">Revenue</p>
          </div>
        </div>
        <div className="from-[#D3A256] text-white bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
          <FaStar className="w-12 h-12 md:mx-0 mx-auto" title="Customers" />
          <div>
            <h1 className="text-3xl ">{reviews?.length}</h1>
            <p className="text-xl">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMonthInfo;
