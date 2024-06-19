"use client";
import { motion } from "framer-motion";
export default function InitialRender() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen">
      <div>
        <motion.div
          className="font-bold flex justify-center items-center text-4xl h-screen sm:text-6xl md:text-6xl lg:text-10xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <div>Muskaan Shaikh</div>
        </motion.div>
        <motion.div
          className="font-bold flex justify-center items-center text-4xl h-screen sm:text-4xl md:text-6xl lg:text-10xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <div>Software Developer</div>
        </motion.div>
        </div>
    </div>
  );
}
