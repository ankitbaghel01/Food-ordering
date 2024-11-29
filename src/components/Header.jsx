import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Search icon
import { RxCrossCircled } from "react-icons/rx"; // Cross icon
import { ChevronUp, ChevronDown } from "lucide-react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClear = () => {
    setSearchText("");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      {/* Search Bar with Search and Clear Icons */}
      <div className="relative w-1/2">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Location"
          className="border rounded-full pl-10 pr-10 py-2 w-full"
        />
        {/* Search Icon */}
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        {/* Clear Icon (Cross) */}
        {searchText && (
          <RxCrossCircled
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
            onClick={handleClear}
          />
        )}
      </div>

      {/* Online Button with Dropdown Icon */}
      <div className="relative text-gray-600">
        <div
          className="border rounded-full text-gray-600 px-4 py-2 flex items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span>Online</span>
          {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute mt-2 right-0 bg-white border rounded shadow w-40">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Online</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Offline</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Busy</li>
            </ul>
          </div>
        )}
      </div>

      {/* Circular Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" fill="white" fillOpacity="0.01" />
        <path
          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
          fill="#725690"
        />
        <path
          d="M14.8688 19.6183C14.8137 20.6653 14.877 21.7797 13.9416 22.4813C13.5062 22.8078 13.25 23.3203 13.25 23.8645C13.25 24.6131 13.8364 25.25 14.6 25.25H25.4C26.1636 25.25 26.75 24.6131 26.75 23.8645C26.75 23.3203 26.4938 22.8078 26.0584 22.4813C25.123 21.7797 25.1863 20.6653 25.1312 19.6183C24.9876 16.8892 22.7329 14.75 20 14.75C17.2671 14.75 15.0124 16.8892 14.8688 19.6183Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.875 13.3438C18.875 13.9651 19.3787 14.75 20 14.75C20.6213 14.75 21.125 13.9651 21.125 13.3438C21.125 12.7224 20.6213 12.5 20 12.5C19.3787 12.5 18.875 12.7224 18.875 13.3438Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M22.25 25.25C22.25 26.4926 21.2426 27.5 20 27.5C18.7574 27.5 17.75 26.4926 17.75 25.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Header;
