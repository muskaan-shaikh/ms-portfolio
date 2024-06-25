"use client";
import Image from "next/image";
import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import star from "@/assets/stars.svg";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import { FaArrowRightLong } from "react-icons/fa6";
import { delay, motion } from "framer-motion";
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
      <motion.div
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          priority
          src={star}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
      <div className="bg-custom-radial-bottom-right md:bg-custom-radial w-screen h-screen">
        <div className="absolute inset-0 left-[5%] right-[5%] md:left-[10%] flex flex-col justify-center">
          <Logo />
          <Navbar />
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
            I'm a recent graduate with MS in CS degree diving into the world of
            software engineering. I'm passionate about coding and crafting
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
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
