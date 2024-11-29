import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">Order ID: {order.id}</h4>
        <div className="flex space-x-2">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Call</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Message</button>
        </div>
      </div>
      <div className="mt-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <p>{item.name}</p>
            <p>x{item.quantity}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
        <div className="border-t mt-4 pt-2 flex justify-between">
          <p>Grand Total</p>
          <p className="font-bold">₹{order.total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
