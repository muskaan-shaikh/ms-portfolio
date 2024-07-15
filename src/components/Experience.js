"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import experience from "@/assets/experience.json";
import Button from "@/components/Button";
import { TbExternalLink } from "react-icons/tb";
import Bullet from "@/assets/Bullet";

const ExpItem = ({ exp }) => {
  return (
    <div>
      <p>
        {exp.title}, <span className="text-primary">{exp.company}</span>
      </p>
      <p className="text-sm text-primaryLight italic mb-3">{exp.duration}</p>
      <ul className="list-none">
        {exp.work.map((point, index) => {
          return (
            <li key={index} className="mb-2 pl-3 flex items-center">
              <Bullet className="mr-2" />
              <p className="small">{point}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Experience() {
  const [active, setActive] = useState("exp1");
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(active);
  }, [active]);
  return (
    <Layout id="experience" title="Experience">
      <ul className="bg-black relative flex justify-between z-0 mb-10 w-full">
        <li
          className="w-1/2 cursor-pointer p-2 transition ease-in duration-300 text-center text-text hover:text-primary"
          onClick={() => setActive("exp1")}
        >
          Software Engineer
        </li>
        <li
          className="w-1/2 cursor-pointer p-2 transition ease-in duration-500 text-center text-text hover:text-primary"
          onClick={() => setActive("exp2")}
        >
          React Developer
        </li>
        <div
          className={`absolute bottom-0 h-1 bg-primary rounded transition-all duration-500 ease-in-out`}
          style={{
            width: active === "exp1" ? "50%" : "50%",
            transform:
              active === "exp1" ? "translateX(0%)" : "translateX(100%)",
          }}
        />
      </ul>
      {active === "exp1" && (
        <div
          className={`transition-all duration-300 ease-in ${
            mounted === "exp1" ? "opacity-100" : "opacity-0"
          }`}
        >
          <ExpItem exp={experience[0]} />
        </div>
      )}

      {active === "exp2" && (
        <div
          className={`transition-all duration-300 ease-in flex flex-col gap-y-10 items-start ${
            mounted === "exp2" ? "opacity-100" : "opacity-0"
          }`}
        >
          <ExpItem exp={experience[1]} />
          <ExpItem exp={experience[2]} />
          <div className="-mt-9 pl-8">
            <a href="https://dine-in-or-take-away.netlify.app" target="_blank">
              <Button>
                View Template <TbExternalLink />
              </Button>
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
}
