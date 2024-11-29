import React from 'react';

const ProgressTracker = () => {
  const steps = ['Preparing Food', 'Ready', 'Out for Delivery', 'Delivered'];

  return (
    <div className="flex space-x-2 mt-4">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`flex-1 text-center py-2 rounded ${
            idx === 0 ? 'bg-purple-600 text-white' : 'bg-gray-200'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
