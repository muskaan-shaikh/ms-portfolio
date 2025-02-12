import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-screen h-32 bg-secondary flex items-center justify-center">
      <a
        href="https://github.com/muskaan-shaikh/ms-portfolio"
        target="_blank"
        className=" flex justify-center items-center cursor-pointer hover:text-primary"
      >
        &copy; {currentYear} Muskaan Shaikh
      </a>
    </footer>
  );
}
