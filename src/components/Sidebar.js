import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="hidden md:block">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-6 flex left-[2%] md:bottom-0 md:flex-col justify-between items-center z-20"
      >
        <a
          href="https://github.com/muskaan-shaikh"
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          target="_blank"
        >
          <FaGithub size={25} className="w-full" />
        </a>

        <a
          href="https://www.linkedin.com/in/shaikh-muskaan"
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          target="_blank"
        >
          <FaLinkedin size={25} className="w-full" />
        </a>

        <a
          href="mailto:muskaan.mysa@gmail.com"
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          target="_blank"
        >
          <MdEmail size={25} className="w-full" />
        </a>

        <div className="h-0.5 w-72 md:w-0.5 bg-white md:h-32"></div>
      </motion.div>
    </div>
  );
}
