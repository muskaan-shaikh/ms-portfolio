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
          image={portfolio}
          title="Portfolio Website"
          details="A platform created to highlight my technical proficiency,
                creative abilities, career milestones, and contributions to
                various projects"
          techstack={["Next.js", "Tailwind css"]}
          github="https://github.com/muskaan-shaikh/ms-portfolio"
          link="jhdg"
        />
        <ProjectItem
          image={docxtract}
          title="DocXtract"
          details="Service which allows users to capture an image of their document, where their handwriting is converted to text and stored in a
          database of responses for the organiser to view and query"
          techstack={["React.js", "React Native", "Python"]}
          video="link"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
        <ProjectItem
          image={leap}
          title="LEAPs"
          details="An AI-partner system used for seamless integration with Learning Management Systems (LMS) and
          GenAI interfaces to foster smooth tool exchange and customization"
          techstack={["Node.js, OpenAI API, Angular.js"]}
          more="sf"
        />
        <ProjectItem
          image={dashboard}
          title="KB Student Dashboard"
          details="Analytics dashboard to track student progress and analyse word usage, providing students and educators with concise insights
          into academic performance"
          techstack={["React.js", "Python", "Spacy"]}
          more="sf"
        />
      </div>
    </Layout>
  );
}
