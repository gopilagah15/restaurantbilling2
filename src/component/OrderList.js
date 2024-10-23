import React from "react";

const OrderList = ({ orders, dailyTotal }) => {
  return (
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount (%)</th>
            <th>Total</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.tableNumber}</td>
              <td>{order.items}</td>
              <td>{order.quantity}</td>
              <td>${order.price.toFixed(2)}</td>
              <td>{order.discount}%</td>
              <td>${order.total.toFixed(2)}</td>
              <td>${order.finalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Daily Total: ${dailyTotal.toFixed(2)}</h3>
    </div>
  );
};

export default OrderList;
