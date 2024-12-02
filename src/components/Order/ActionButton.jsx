import * as React from "react";

function ActionButton({ text, icon, variant, bgColor, borderColor, textColor }) {
  const baseClasses = "flex gap-2 justify-center items-center self-stretch px-3 my-auto min-h-[32px]";
  const variantClasses = variant === "primary" 
    ? `${bgColor} text-white` 
    : `${borderColor} ${textColor} border border-solid`;

  return (
    <button 
      className={`${baseClasses} rounded-full ${variantClasses}`}
      aria-label={text}
      tabIndex={0}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <div className="self-stretch my-auto">{text}</div>
    </button>
  );
}

export default ActionButton;