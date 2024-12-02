import * as React from "react";
import StatusButton from "./StatusButton.jsx";
import TrackProgress from "./TrackProgress.jsx";

const orderSteps = [
  {
    text: "Accept Order",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e7cc8ba5c2d86138684551b9b8ab5ae3fa194136829205ede3f91b8b8326f1d?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    active: true
  },
  {
    text: "Start Preparing",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a7b668a8c5675643b812d0d5c8614f827e7eaa19302257f12db06bbed085887?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff",
    active: false
  }
];

function OrderStatus() {
  return (
    <div className="flex flex-col max-w-xs">
      <div className="self-start text-base font-bold tracking-normal leading-5 bg-white bg-opacity-0 text-neutral-800">
        Order Status
      </div>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {orderSteps.map((step, index) => (
          <StatusButton
            key={index}
            text={step.text}
            icon={step.icon}
            active={step.active}
          />
        ))}
      </div>
      <div className="flex overflow-hidden items-center mt-2.5 w-full bg-white bg-opacity-0">
        <div className="flex flex-1 shrink self-stretch my-auto w-full basis-0 bg-slate-950 bg-opacity-10 min-h-[1px] min-w-[240px]" />
      </div>
      <div className="self-start mt-2.5 text-base font-bold tracking-normal leading-5 bg-white bg-opacity-0 text-neutral-800">
        Track Progress
      </div>
      <TrackProgress />
    </div>
  );
}

export default OrderStatus;