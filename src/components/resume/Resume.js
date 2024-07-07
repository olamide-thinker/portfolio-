import React from "react";
import Title from "../home/Title";
import Experience  from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="Resume" />
      <Experience  />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default Resume;
