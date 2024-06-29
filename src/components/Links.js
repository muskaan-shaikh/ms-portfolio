"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Links() {
  return (
    <div className="md:hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-evenly items-center "
      >
        <FaGithub
          size={25}
          className="cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() => window.open("https://github.com/muskaan-shaikh")}
        />
        <FaLinkedin
          size={25}
          className="cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() =>
            window.open("https://www.linkedin.com/in/shaikh-muskaan")
          }
        />
        <MdEmail
          size={25}
          className="cursor-pointer hover:scale-150 ease-in duration-300"
          onClick={() => window.open("mailto:muskaan.mysa@gmail.com")}
        />
      </motion.div>
    </div>
  );
}
