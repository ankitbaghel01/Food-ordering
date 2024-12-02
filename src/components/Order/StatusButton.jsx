import * as React from "react";

function StatusButton({ text, icon, active }) {
  const baseClasses = "flex gap-2 justify-center items-center px-3 w-full text-sm font-medium tracking-normal leading-4 rounded-full min-h-[32px]";
  const activeClasses = "bg-purple-800 text-white";
  const inactiveClasses = "bg-slate-950 bg-opacity-10 text-slate-900 text-opacity-30";

  return (
    <button 
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      tabIndex={0}
      role="button"
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

export default StatusButton;