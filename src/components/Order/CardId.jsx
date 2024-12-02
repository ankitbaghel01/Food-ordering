import * as React from "react";
import ActionButton from "./ActionButton.jsx";

const deliveryActions = [
  {
    text: "Call",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cce9bff9a2aa1e06d05e4cb5f477874ca4498ada300c31f5c63891bc5fda?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    variant: "primary",
    bgColor: "bg-purple-800"
  },
  {
    text: "Message",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/753858d294538b431478cf9a3eabc4dee1fca4470af6bfc77da8e8e6f976a2f1?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    variant: "secondary",
    borderColor: "border-purple-950 border-opacity-40",
    textColor: "text-violet-950 text-opacity-70"
  }
];

function CardId() {
  return (
    <div className="">
      <h2><span className="font-bold">Order Id:</span>#432523OLD7V </h2>
    <div className="flex overflow-hidden flex-col px-3 pt-3 pb-28 text-sm tracking-normal leading-4 rounded-2xl border border-solid bg-white bg-opacity-80 border-slate-950 border-opacity-10 max-w-[263px]">
      
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start max-w-full w-[207px]">
          <div className="flex gap-2.5 items-center font-bold text-zinc-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d090e9c7774f522b83e2d28a79fa3bf00ba538c57ad73ed92e24283bb526e313?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff"
              alt="Profile picture of Paartho Ghosh"
              className="object-contain shrink-0 self-stretch my-auto w-6 rounded-full aspect-square min-h-[24px]"
            />
            <div className="self-stretch my-auto bg-white bg-opacity-0">
              Paartho Ghosh
            </div>
          </div>
          <div className="flex-1 shrink self-stretch mt-2.5 w-full text-xs font-light tracking-normal leading-3 bg-white bg-opacity-0 text-neutral-800">
            Deliver between 12:00 PM to 12:30 PM
          </div>
          <div className="flex overflow-hidden gap-2.5 items-center mt-2.5 font-medium whitespace-nowrap">
            {deliveryActions.map((action, index) => (
              <ActionButton key={index} {...action} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CardId;