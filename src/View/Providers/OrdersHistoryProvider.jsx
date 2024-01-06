import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const OrdersHistoryContext = createContext(null);

const OrdersHistoryProvider = ({ children }) => {
  const [ordersHistory, setOrdersHistory] = useState([]);

  useEffect(() => {
    // Initialize ordersHistory from localStorage when the component mounts
    const currentOrdersHistory = JSON.parse(
      localStorage.getItem("CFOrdersHistory")
    );
    setOrdersHistory(currentOrdersHistory || []);
  }, []);

  const handleAddToOrdersHistory = (order) => {
    // Update ordersHistory state and localStorage when a new order is added
    const updatedOrdersHistory = [...ordersHistory, order];
    setOrdersHistory(updatedOrdersHistory);
    localStorage.setItem(
      "CFOrdersHistory",
      JSON.stringify(updatedOrdersHistory)
    );
    toast.success("Order added successfully");
  };

  const handleDeleteOrder = (date) => {
    // Filter out the order with the matching date
    const updatedOrdersHistory = ordersHistory.filter(
      (order) => order.date !== date
    );

    // Update state and local storage
    setOrdersHistory(updatedOrdersHistory);
    localStorage.setItem(
      "CFOrdersHistory",
      JSON.stringify(updatedOrdersHistory)
    );

    toast.success("Order deleted successfully");
  };

  const contextValue = {
    ordersHistory,
    handleAddToOrdersHistory,
    handleDeleteOrder,
  };

  return (
    <OrdersHistoryContext.Provider value={contextValue}>
      {children}
    </OrdersHistoryContext.Provider>
  );
};

export default OrdersHistoryProvider;
