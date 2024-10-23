import React, { useState } from "react";
import OrderForm from "./component/OrderForm";
import OrderList from "./component/OrderList";
 

function App() {
  const [orders, setOrders] = useState([]);
  const [dailyTotal, setDailyTotal] = useState(0);

  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    // Update daily total
    setDailyTotal((prevTotal) => prevTotal + order.finalPrice);
  };

  return (
    <div>
      <h1>Order Management System</h1>
      <OrderForm addOrder={addOrder} />
      <OrderList orders={orders} dailyTotal={dailyTotal} />
    </div>
  );
}

export default App;
