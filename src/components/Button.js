import React from "react";

export default function Button({ children, variant, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center gap-x-2 ${
        variant === "outlined"
          ? "shadow-sm shadow-gray-400 rounded-sm border border-button text-button bg-black px-3 py-2 w-fit transition-all ease-linear duration-500  hover:bg-logo hover:border-secondary hover:text-light"
          : "text-primaryLight hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
