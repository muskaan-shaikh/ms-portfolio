"use client";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";

import Button from "../../components/Button";

export default function ProjectItem({
  image,
  title,
  details,
  techstack,
  github,
  link,
  video,
  more,
}) {
  return (
    <div className="relative text-[#ebebeb] md:w-1/2 cursor-pointer">
      <div className="relative z-10 border border-white bg-secondary h-full">
        <div>
          <Image src={image} className="w-full h-full object-cover" />
          <div className="m-3">
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
                  <FiVideo className="cursor-pointer hover:text-primary" />
                )}
                {more && (
                  <Button>
                    Read More <FaArrowRightLong />
                  </Button>
                )}
              </div>
            </div>
            <p className="xsmall mb-3">{details}</p>
            <div className="flex gap-x-4">
              {techstack.map((stack) => (
                <p className="small text-button">{stack}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 border border-primary transform translate-x-3 translate-y-3"></div>
    </div>
  );
}
