import React from "react";

const Tabs = () => {
  const tabs = [
    { label: "New Orders", count: 4, active: true },
    { label: "Accepted", count: 7 },
    { label: "Preparing", count: 3 },
    { label: "Ready", count: 6 },
    { label: "Pick up", count: 2 },
    { label: "Delivered", count: 13 },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 font-semibold">
      {/* Order Status Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border ${
              tab.active
                ? "bg-purple-500 text-white"
                : "text-purple-500 border-purple-500"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* All Orders Button */}
      <button className="px-4 py-2 rounded-full border text-purple-500 border-purple-500">
        All Orders (36)
      </button>
    </div>
  );
};

export default Tabs;
