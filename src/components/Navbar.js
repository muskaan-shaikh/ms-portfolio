"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [active, setActive] = useState("home");

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
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed left-0 top-7 flex justify-center items-center w-full z-20 text-text"
    >
      <ul
        className={`flex gap-x-8 md:gap-x-10 transition-all ease-linear duration-200 border border-transparent ${
          isPageScrolled &&
          "bg-[#333] bg-opacity-20 backdrop-filter backdrop-blur-lg border-2 border-white border-opacity-50 shadow-lg rounded-full px-8 py-1"
        }`}
      >
        <li
          className={`py-1 md:py-2 transition ease-linear duration-200 ${
            active === "home"
              ? "px-2 md:px-4 bg-[#333] rounded-3xl"
              : "hover:text-[#C47820]"
          } `}
          onClick={() => setActive("home")}
        >
          <Link href="#home">Home</Link>
        </li>
        <li
          className={`py-1 md:py-2 transition ease-linear duration-200 ${
            active === "experience"
              ? "px-2 md:px-4 bg-[#333] rounded-3xl"
              : "hover:text-[#C47820]"
          } `}
          onClick={() => setActive("experience")}
        >
          <Link href="#experience">Experience</Link>
        </li>
        <li
          className={`py-1 md:py-2 transition ease-linear duration-200 ${
            active === "projects"
              ? "px-2 md:px-4 bg-[#333] rounded-3xl"
              : "hover:text-[#C47820]"
          } `}
          onClick={() => setActive("projects")}
        >
          <Link href="#projects">Projects</Link>
        </li>
        <li
          className={`py-1 md:py-2 transition ease-linear duration-200 ${
            active === "contact"
              ? "px-2 md:px-4 bg-[#333] rounded-3xl"
              : "hover:text-[#C47820]"
          } `}
          onClick={() => setActive("contact")}
        >
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
}
