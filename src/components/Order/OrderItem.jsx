import React from "react";
import PropTypes from "prop-types";

function OrderItem({ icon, quantity, name, total }) {
  return (
    <>
      <div className="flex gap-2.5 w-full">
        <div className="flex gap-2.5 h-full text-base font-bold tracking-normal leading-5 min-w-[240px] text-slate-950 text-opacity-90">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-start aspect-[0.95] w-[18px]"
            alt={`Icon representing ${name}`}
          />
          <div className="flex flex-col justify-between w-[222px]">
            <div className="flex-1 shrink w-full bg-white bg-opacity-0">
              {quantity} × {name}
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col flex-1 items-end text-xs font-light tracking-normal leading-3 text-neutral-800">
          <div className="bg-white bg-opacity-0">Total: ₹{total}</div>
        </div>
      </div>
      <div className="mt-2.5 w-full border border-violet-300" />
    </>
  );
}

// PropTypes validation
OrderItem.propTypes = {
  icon: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default OrderItem;
