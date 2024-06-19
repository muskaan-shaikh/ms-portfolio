import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import star from "@/assets/stars.svg";
import Button from "./Button";
import Sidebar from "./Sidebar";


export default function Main() {
  return (
    <div className="relative w-screen h-screen">
      <Image priority src={star} className="absolute inset-0 w-full h-full object-cover" />
      <div className="bg-custom-radial-bottom-right md:bg-custom-radial w-screen h-screen">
      <Logo />
      <Navbar />
        <div className="absolute inset-0 left-[5%] right-[5%] md:left-[10%] flex flex-col justify-center">
          <h1>Muskaan Shaikh</h1>
          <h4 className="text-[#d6b48c] mt-[3%] mb-[8%] md:mt-[2%] md:mb-[3%] md:w-[70%]">
            Coding my way to create impactful digital solutions
          </h4>
          <h6 className="md:w-[70%] mb-[15%] md:mb-[6%]">
            I'm a recent graduate with MS in CS degree diving into the world of
            software engineering. I'm passionate about coding and crafting
            impactful online solutions, especially in web development and AI
            integration.
          </h6>
          <Button>View my Resume</Button>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
