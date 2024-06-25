import React from "react";
import Bullet from "@/assets/Bullet.js";

export const ExpItem = ({ exp }) => {
  return (
    <div>
      <p>
        {exp.title}, <span className="text-primary">{exp.company}</span>
      </p>
      <p className="text-sm text-primaryLight italic mb-3">{exp.duration}</p>
      <ul className="list-none">
        {exp.work.map((point) => {
          return (
            <li className="mb-2 pl-3 flex items-center">
              <Bullet className="mr-2" />
              <p className="small">{point}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
