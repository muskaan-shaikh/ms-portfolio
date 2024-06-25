"use client";
import React from "react";
export default function Layout({ children, id, title }) {
  return (
    <div
      id={id}
      className="bg-secondary w-screen px-[5%] md:px-[10%] py-20 md:py-10 text-light"
    >
      <h5 className="mb-[3%]">{title}</h5>
      {children}
    </div>
  );
}
