"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsPageScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isPageScrolled]);
  return (
    <div className="absolute left-0 top-10 flex justify-center items-center w-full">
      <ul className="flex gap-x-8 md:gap-x-10 backdrop-blur-3xl shadow-inner rounded-full">
        <li className="px-2 md:px-4 py-1 md:py-2 hover:text-[#C47820] bg-[#333] rounded-3xl">
          <Link href="/">Home</Link>
        </li>
        <li className="py-1 md:py-2 hover:text-[#C47820]">
          <Link href="#experience">Experience</Link>
        </li>
        <li className="py-1 md:py-2 hover:text-[#C47820]">
          <Link href="/">Projects</Link>
        </li>
        <li className="py-1 md:py-2 hover:text-[#C47820]">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
