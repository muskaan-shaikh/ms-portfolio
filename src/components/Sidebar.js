import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-6 flex left-[2%] md:bottom-0 md:flex-col justify-between items-center">
        <FaGithub size={25} className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300" />
        <FaLinkedin size={25} className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300" />
          <div className="h-0.5 w-72 md:w-0.5 bg-white md:h-40"></div>
      </div>
    </div>
  );
}
