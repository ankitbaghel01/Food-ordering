import React from 'react';
import Card from './CardId';
import OrderDetails from './OrderDetails.jsx';
import OrderStatus from './OrderStatus.jsx';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded p-4 mb-4 flex gap-3 items-center">
      {/* Card Section */}
      <Card />
      
      {/* Vertical Divider */}
      <div className="w-px h-auto bg-gray-300 mx-2" />
      
      {/* Order Details Section */}
      <OrderDetails />
      
      {/* Vertical Divider */}
      <div className="w-px h-auto bg-gray-300 mx-2" />
      
      {/* Order Status Section */}
      <OrderStatus />
    </div>
  );
};

export default OrderCard;
