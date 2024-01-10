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
  console.log(orders);

  // State to manage the selected month
  const [selectedMonth, setSelectedMonth] = useState("all"); // Default: show data for all months

  // Group orders by date and calculate total income for each date
  const groupedOrders = orders.reduce((result, order) => {
    const createdAt = new Date(
      order.createdAt.replace(/( at \d+:\d+:\d+ [APMapm]+)$/, "")
    );
    const dayAndMonth = `${createdAt.getDate()} ${createdAt.toLocaleString(
      "en-US",
      { month: "short" }
    )}`;

    if (!result[dayAndMonth]) {
      result[dayAndMonth] = { dayAndMonth, income: 0 };
    }

    result[dayAndMonth].income += order.totalAmount;
    return result;
  }, {});

  // Get the unique dayAndMonth values
  const uniqueDayAndMonth = Object.keys(groupedOrders);

  // Filter data based on the selected month
  const filteredData =
    selectedMonth === "all"
      ? uniqueDayAndMonth.map(
          (dayAndMonth) =>
            groupedOrders[dayAndMonth] || { dayAndMonth, income: 0 }
        )
      : uniqueDayAndMonth
          .filter((dayAndMonth) => dayAndMonth.includes(selectedMonth))
          .map(
            (dayAndMonth) =>
              groupedOrders[dayAndMonth] || { dayAndMonth, income: 0 }
          );

  // Sort filteredData based on the day of the month
  filteredData.sort((a, b) => {
    const dateA = parseInt(a.dayAndMonth.split(" ")[0]);
    const dateB = parseInt(b.dayAndMonth.split(" ")[0]);
    return dateA - dateB;
  });

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="mt-16">
      {/* Add a dropdown to select the month */}
      <select
        className="mb-6 focus:ring-rose-400 focus:border-white"
        value={selectedMonth}
        onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index} value={month?.date}>
            {month?.name}
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
