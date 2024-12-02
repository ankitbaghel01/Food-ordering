import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header.jsx';
import Tabs from './components/Tabs.jsx';
import OrderCard from './components/Order/OrderCard.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';

const App = () => {
  const sampleOrder = {
    id: '#JDOE3849VXOLD',
    deliveryTime: '12:00 PM to 12:30 PM',
    items: [
      { name: 'Cheese Chicken Sandwich', quantity: 1, price: 249.49 },
      { name: 'Paneer Grilled Sandwich', quantity: 2, price: 498.98 },
    ],
    total: 703.47,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar: Fixed height with scroll */}
      <Sidebar className="w-64 bg-white shadow-md h-screen overflow-y-auto" />
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 flex flex-col">
        <Header />
        <Tabs />
        <div className="p-4 overflow-y-auto flex-grow">
          {/* Scrollable Content */}
          <OrderCard order={sampleOrder} />
          <OrderCard order={sampleOrder} />
          <OrderCard order={sampleOrder} />
        </div>
      </div>
    </div>
  );
};

export default App;
