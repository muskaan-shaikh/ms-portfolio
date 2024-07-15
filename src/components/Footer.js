import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen h-32 bg-secondary flex items-center justify-center">
      <a
        href="https://github.com/muskaan-shaikh/ms-portfolio"
        target="_blank"
        className=" flex justify-center items-center cursor-pointer hover:text-primary"
      >
        &copy; 2024 Muskaan Shaikh
      </a>
    </footer>
  );
}
