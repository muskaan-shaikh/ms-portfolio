import React from "react";

export default function Button({children}) {
  return (
    <button className="transition-transform duration-300 transform hover:-translate-y-1 hover:text-white hover:border-white">{children}</button>
  );
}
