"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Initial() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div
        initial={{ background: "#c47820", opacity: 0 }}
        animate={{
          background:
            "radial-gradient(circle at 100%, #000000, #000000 0%, #c47820 100%,  #000000 100%)",
          opacity: 1,
        }}
        transition={{ duration: 2 }}
        className="p-4 rounded-full"
      >
        <motion.h6
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MS
        </motion.h6>
      </motion.div>
    </div>
  );
}
