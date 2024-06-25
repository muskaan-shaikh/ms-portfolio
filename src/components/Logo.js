import React from "react";
import { motion } from "framer-motion";
export default function Logo() {
  return (
    <motion.div
      initial={{ background: "#c47820", opacity: 0 }}
      animate={{
        background:
          "radial-gradient(circle at 100%, #000000, #000000 0%, #c47820 100%,  #000000 100%)",
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="p-4 rounded-full fixed top-6 left-[2%] z-20 hidden md:block cursor-pointer"
    >
      <motion.h6
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="cursor-pointer"
      >
        MS
      </motion.h6>
    </motion.div>
  );
}
