"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Layout({ children, id, title }) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };
  return (
    <section
      id={id}
      className="bg-secondary w-screen px-[5%] md:px-[10%] py-20 md:py-10 text-light"
    >
      <h5 className="mb-[3%]">{title}</h5>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}
