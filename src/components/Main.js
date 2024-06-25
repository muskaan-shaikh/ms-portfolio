"use client";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import star from "@/assets/stars.svg";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function Main() {
  const textVariants = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: delay,
      },
    },
  });
  return (
    <div id="home" className="relative w-screen h-screen">
      <Logo />
      <Navbar />
      <Image
        priority
        src={star}
        alt="Star"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
      <div className="absolute inset-0 w-full h-full bg-custom-radial-bottom-right md:bg-custom-radial">
        <div className="absolute inset-0 left-[5%] right-[5%] md:left-[10%] flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants(2)}
            className="text-light"
          >
            Muskaan Shaikh
          </motion.h1>
          <motion.h4
            initial="hidden"
            animate="visible"
            variants={textVariants(2.1)}
            className="text-primaryLight mt-[3%] mb-[8%] md:mt-[2%] md:mb-[3%] md:w-[70%]"
          >
            Coding my way to create impactful digital solutions
          </motion.h4>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants(2.2)}
            className="md:w-[70%] mb-[15%] md:mb-[6%] text-text"
          >
            I&apos;m a recent graduate with MS in CS degree diving into the world of
            software engineering. I&apos;m passionate about coding and crafting
            impactful online solutions, especially in web development and AI
            integration.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants(2.5)}
          >
            <Button
              variant="outlined"
              onClick={() => window.open("Resume.pdf", "_blank")}
            >
              Resume <FaArrowRightLong />
            </Button>
          </motion.div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
