import React from "react";

const RoundedHeader = ({ title, bg }) => {
  return (
    <div
      data-aos="fade-up"
      className={`border z-50  w-fit border-primary rounded-full px-4 py-2 ${
        bg
          ? `bg-transparent dark:text-white text-black`
          : `bg-black text-primary`
      }`}
    >
      <h1 className="text-[13px]  font-medium ">{title}</h1>
    </div>
  );
};

export default RoundedHeader;
