"use client";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { BsFiletypePpt } from "react-icons/bs";
import Button from "./Button";
import { easeIn, motion } from "framer-motion";

export default function ProjectItem({
  image,
  title,
  details,
  techstack,
  redirect,
  github,
  link,
  video,
  more,
  blog,
  ppt,
  recognition,
}) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        easeIn
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="relative text-[#ebebeb] md:w-1/2 cursor-pointer"
      onClick={() => window.open(redirect)}
    >
      <div className="relative z-10 border border-white bg-secondary h-full transform transition-transform ease-in duration-150 hover:-translate-x-3 hover:-translate-y-3">
        <div>
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="m-3 flex flex-col justify-between flex-grow">
            <div className="border-b border-b-white py-1 mb-3 flex justify-between items-center">
              <h6>{title}</h6>
              <div className="flex gap-x-5">
                {github && (
                  <FiGithub
                    className="cursor-pointer hover:text-primary"
                    onClick={() => window.open(github)}
                  />
                )}
                {link && (
                  <FiLink
                    className="cursor-pointer hover:text-primary"
                    onClick={() => window.open(link)}
                  />
                )}
                {video && (
                  <FiVideo
                    className="cursor-pointer hover:text-primary"
                    onClick={() => window.open(video)}
                  />
                )}
                {blog && (
                  <RiArticleLine
                    className="cursor-pointer hover:text-primary"
                    onClick={() => window.open(blog)}
                  />
                )}
                {ppt && (
                  <BsFiletypePpt
                    className="cursor-pointer hover:text-primary"
                    onClick={() => window.open(ppt)}
                  />
                )}
                {more && (
                  <Button>
                    Read More <FaArrowRightLong />
                  </Button>
                )}
              </div>
            </div>
            <p className="xsmall mb-3">{details}</p>
            {recognition}
            <div className="flex gap-x-4">
              {techstack.map((stack, index) => (
                <p key={index} className="small text-button">
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 border border-primary transform translate-x-3 translate-y-3"></div>
    </motion.div>
  );
}
