import React, { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [tableNumber, setTableNumber] = useState("");
  const [items, setItems] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const total = price * quantity;
    const finalPrice = total - (total * discount) / 100;

    const newOrder = {
      tableNumber,
      items,
      quantity,
      price,
      discount,
      total,
      finalPrice,
    };

    addOrder(newOrder);

    // Reset form
    setTableNumber("");
    setItems("");
    setQuantity(1);
    setPrice(0);
    setDiscount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Order</h2>
      <div>
        <label>Table Number:</label>
        <input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Items Ordered:</label>
        <input
          type="text"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
          required
        />
      </div>
      <div>
        <label>Price per Item:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div>
        <label>Discount (%):</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
          min="0"
          max="100"
        />
      </div>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
