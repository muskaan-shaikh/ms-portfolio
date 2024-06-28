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
        <FaGithub
          size={25}
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() => window.open("https://github.com/muskaan-shaikh")}
        />
        <FaLinkedin
          size={25}
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() =>
            window.open("https://www.linkedin.com/in/shaikh-muskaan")
          }
        />
        <MdEmail
          size={25}
          className="w-12 md:mb-6 cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() => window.open("mailto:muskaan.mysa@gmail.com")}
        />

        <div className="h-0.5 w-72 md:w-0.5 bg-white md:h-32"></div>
      </motion.div>
    </div>
  );
}
