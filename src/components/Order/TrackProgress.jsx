import * as React from "react";

const progressSteps = [
  "Preparing\nFood",
  "Ready",
  "Out For\nDelivery",
  "Delivered"
];

function TrackProgress() {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-3 mt-2.5 w-full text-xs font-light tracking-normal leading-3 text-center rounded-2xl border border-solid bg-white bg-opacity-80 border-slate-950 border-opacity-10 text-slate-900 text-opacity-30">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full max-w-[288px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/395b128ce797af881b5a6fc70516e6d290c85237d558273352352c9bf53c5b9f?placeholderIfAbsent=true&apiKey=bd3ebe1ab1594040983a57d034dd25ff"
            alt="Order progress timeline"
            className="object-contain mr-5 ml-5 aspect-[15.63] max-w-[251px] w-[251px]"
          />
          <div className="flex gap-5 justify-between mt-2.5 w-full">
            {progressSteps.map((step, index) => (
              <div 
                key={index}
                className={`whitespace-nowrap bg-white bg-opacity-0 ${
                  !step.includes('\n') ? 'self-start' : ''
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackProgress;