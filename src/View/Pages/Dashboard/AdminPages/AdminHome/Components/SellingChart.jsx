import { useState } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import useOrders from "../../../../../Hooks/useOrders";

const months = [
  { date: "all", name: "All Months" },
  { date: "Jan", name: "January" },
  { date: "Feb", name: "February" },
  { date: "Mar", name: "March" },
  { date: "Apr", name: "April" },
  { date: "May", name: "May" },
  { date: "Jun", name: "June" },
  { date: "Jul", name: "July" },
  { date: "Aug", name: "August" },
  { date: "Sep", name: "September" },
  { date: "Oct", name: "October" },
  { date: "Nov", name: "November" },
  { date: "Dec", name: "December" },
];

const SellingChart = () => {
  const [orders, ,] = useOrders();
  // console.log(orders);

  const filteredOrders = orders.filter(
    (order) => order.orderStatus === "confirmed"
  );

  // State to manage the selected month and year
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Group filteredOrders by date and calculate total income for each date
  const groupedOrders = filteredOrders.reduce((result, order) => {
    const createdAt = new Date(
      order.createdAt.replace(/( at \d+:\d+:\d+ [APMapm]+)$/, "")
    );
    const year = createdAt.getFullYear();
    const month = createdAt.toLocaleString("en-US", { month: "short" });
    const dayAndMonth = `${month} ${createdAt.getDate()}, ${year}`;

    if (!result[dayAndMonth]) {
      result[dayAndMonth] = { dayAndMonth, income: 0 };
    }

    result[dayAndMonth].income += order.totalAmount;
    return result;
  }, {});

  // Get the unique dayAndMonth values
  const uniqueDayAndMonth = Object.keys(groupedOrders);

  // Filter data based on the selected month and year
  const filteredData =
    selectedMonth === "all"
      ? uniqueDayAndMonth
          .filter((dayAndMonth) =>
            selectedYear === "all" ? true : dayAndMonth.includes(selectedYear)
          )
          .map(
            (dayAndMonth) =>
              groupedOrders[dayAndMonth] || { dayAndMonth, income: 0 }
          )
      : uniqueDayAndMonth
          .filter(
            (dayAndMonth) =>
              dayAndMonth.includes(selectedMonth) &&
              (selectedYear === "all" || dayAndMonth.includes(selectedYear))
          )
          .map(
            (dayAndMonth) =>
              groupedOrders[dayAndMonth] || { dayAndMonth, income: 0 }
          );

  // Sort filteredData based on the day of the month and year
  filteredData.sort((a, b) => {
    const dateA = new Date(a.dayAndMonth);
    const dateB = new Date(b.dayAndMonth);
    return dateA - dateB;
  });

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="mt-16 bg-white drop-shadow-2xl shadow-2xl md:p-10  rounded-2xl shadow-purple-200">
      {/* Add dropdowns to select the month and year */}
      <select
        className="mb-6 text-xs ml-3 mt-3 focus:ring-purple-400 focus:border-white"
        value={selectedMonth}
        onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index} value={month?.date}>
            {month?.name}
          </option>
        ))}
      </select>
      <select
        className="mb-6 text-xs ml-4 focus:ring-purple-400 focus:border-white"
        value={selectedYear}
        onChange={handleYearChange}>
        <option value="all">All Years</option>
        {/* Add options for each unique year in the data */}
        {Array.from(
          new Set(
            Object.keys(groupedOrders).map((date) =>
              new Date(date).getFullYear()
            )
          )
        ).map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={filteredData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dayAndMonth" />
          <YAxis dataKey="income" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#ba43de"
            fill="#8884d8"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellingChart;
