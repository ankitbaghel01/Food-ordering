import * as React from "react";
import OrderItem from "./OrderItem";


const orderItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/338b5b8faaedeb8fb4865b776fd44af55efcf6207bcafb4a6878d50f25334fef?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    quantity: 1,
    name: "Cheese Chicken Sandwich",
    total: "249.49"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e94ee63f305b65601ede01f8ac9bf1a4feee477652361646a652e783d1d06fb3?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    quantity: 2,
    name: "Paneer Grilled Sandwich",
    total: "498.98"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2d865d6e1cf148fc3f1d9b03d6565a51c11bc71d5e208f34ef2dc27679e7c71?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    quantity: 1,
    name: "Cheese Chicken Sandwich",
    total: "249.49"
  }
];

export default function OrderDetails() {
  return (
    <div className="">
        <h2><span className="font-bold">Order Id:</span>#432523OLD7V </h2>
    <div className="flex overflow-hidden flex-col justify-center p-3 rounded-2xl border border-solid bg-white bg-opacity-80 border-slate-950 border-opacity-10 max-w-[445px]">
      <div className="flex overflow-hidden flex-col flex-1 justify-between w-full">
        <div className="flex flex-col w-full">
          {orderItems.map((item, index) => (
            <OrderItem key={index} {...item} />
          ))}
          
          <div className="flex gap-10 justify-between items-center mt-2.5 w-full text-xs font-light tracking-normal leading-3 text-neutral-800">
            <div className="flex items-start self-stretch my-auto">
              <div className="flex flex-col">
                <div className="bg-white bg-opacity-0">GST 18%</div>
              </div>
            </div>
            <div className="flex flex-col items-end self-stretch my-auto text-right whitespace-nowrap">
              <div className="bg-white bg-opacity-0">₹5</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col mt-10 w-full text-base font-bold tracking-normal leading-5 text-neutral-800">
          <div className="w-full min-h-0 border border-violet-300 border-solid" />
          <div className="flex gap-10 justify-between items-center mt-2.5 w-full min-h-[20px]">
            <div className="flex items-start self-stretch my-auto">
              <div className="flex flex-col">
                <div className="bg-white bg-opacity-0">Grand Total</div>
              </div>
            </div>
            <div className="flex flex-col items-end self-stretch my-auto text-right">
              <div className="bg-white bg-opacity-0">
                ₹<span className="">703.47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}