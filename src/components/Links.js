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
        <a
          href="https://github.com/muskaan-shaikh"
          target="_blank"
          className="cursor-pointer hover:scale-150 ease-in duration-300"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/shaikh-muskaan"
          target="_blank"
          className="cursor-pointer hover:scale-150 ease-in duration-300"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="mailto:muskaan.mysa@gmail.com"
          target="_blank"
          className="cursor-pointer hover:scale-150 ease-in duration-300"
        >
          <MdEmail size={25} />
        </a>
      </motion.div>
    </div>
  );
}
