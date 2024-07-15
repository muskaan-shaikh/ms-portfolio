"use client";
import React from "react";
import Layout from "@/components/Layout";
import portfolio from "@/assets/portfolio.png";
import docxtract from "@/assets/docxtract.png";
import dashboard from "@/assets/dashboard.png";
import leap from "@/assets/leap.png";

import ProjectItem from "./ProjectItem";
export default function Projects() {
  return (
    <Layout id="projects" title="Projects">
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10 mb-16">
        <ProjectItem
          image={docxtract}
          title="DocXtract"
          details={
            <>
              Collaborated with another team member{" "}
              <a
                className="text-primary hover:underline cursor-pointer"
                href="https://builtbypeter.us/"
                target="_blank"
              >
                Peter
              </a>{" "}
              to create a service which allows users to capture an image of
              their document, where their handwriting is converted to text and
              stored in a database of responses for the organiser to view and
              query
            </>
          }
          techstack={["React.js", "React Native", "Python"]}
          redirect="https://www.youtube.com/watch?v=SZTTk0zYu64"
          video="https://www.youtube.com/watch?v=SZTTk0zYu64"
          blog="https://builtbypeter.us/projects/docxtract"
          recognition={
            <p className="xsmall mb-3">
              Selected to be demonstrated at{" "}
              <span className="text-primary">UAlbany Showcase</span>
            </p>
          }
        />
        <ProjectItem
          image={leap}
          title="LEAPs"
          details="An innovative AI-partner system, designed for seamless integration with prevalent Learning Management Systems (LMS) and GenAI interfaces. Powered by Common Agent Request Broker Architecture, the multidimensional agent fosters smooth tool exchange and customization"
          techstack={["Node.js, OpenAI API, Angular.js"]}
          redirect="https://livealbany-my.sharepoint.com/:v:/g/personal/fshah_albany_edu/ETFQkDi_Pe1GqSj26-aLK2IB8nXKOn_J30vWahtwVQiqOA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=arouRd"
          video="https://livealbany-my.sharepoint.com/:v:/g/personal/fshah_albany_edu/ETFQkDi_Pe1GqSj26-aLK2IB8nXKOn_J30vWahtwVQiqOA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=arouRd"
          ppt="https://livealbany-my.sharepoint.com/:p:/g/personal/mshaikh_albany_edu/EZzOkOTlQORLnSn9-V8ulF0Bz4iRuvpVR5nhWFUr-3J08Q?e=jaffYf"
          recognition={
            <p className="xsmall mb-3">
              Recognised with{" "}
              <span className="text-primary">
                Outstanding Master&apos;s Capstone Award
              </span>
            </p>
          }
        />
      </div>

      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
        <ProjectItem
          image={portfolio}
          title="Portfolio Website"
          details="A platform created to highlight my technical proficiency,
                creative abilities, career milestones, and contributions to
                various projects. Built to improve proficiency in frontend developement"
          techstack={["Next.js", "Tailwind css", "Framer Motion"]}
          redirect="https://muskaanshaikh.com"
          github="https://github.com/muskaan-shaikh/ms-portfolio"
          link="https://muskaanshaikh.com"
        />
        <ProjectItem
          image={dashboard}
          title="KB Student Dashboard"
          details="Analytics dashboard to track student progress and analyse word usage, providing students and educators with concise insights
          into academic performance"
          techstack={["React.js", "Python", "Spacy"]}
          redirect="https://kf6.ualbany.org"
          link="https://kf6.ualbany.org"
        />
      </div>
    </Layout>
  );
}
