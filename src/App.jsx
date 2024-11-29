import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Tabs from './components/Tabs.jsx';
import OrderCard from './components/OrderCard.jsx';
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
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <Tabs />
        <div className="p-4">
          <OrderCard order={sampleOrder} />
          <OrderCard order={sampleOrder} />
        </div>
      </div>
    </div>
  );
};

export default App;
