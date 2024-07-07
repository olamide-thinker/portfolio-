import React from "react";
// import {
//   workImgOne,
//   workImgTwo,
//   workImgThree,
//   workImgFour,
//   workImgFive,
//   workImgSix,
//   workImgSeven,
//   workImgEight,
// } from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard"
import shan from '../../assets/work/Shan.png'
import juliet from '../../assets/work/juliet Ai.png'
import boldo from '../../assets/work/Boldo.png'
import edu from '../../assets/work/edu.png'

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
          link={'https://www.shaninteriordesign.com/'}
            title="Shan Interiors"
            category="Shan Interiors Ltd an interior design company focused on commercial and domestic interior design services in Nigeria"
            image={shan}
          />
          <ProjectsCard
            title="juliet-Ai "
            category="Is a conversational AI tech expert who helps you throughout your tech journey—the 
            Future of Scalable Learning "
            image={juliet}
            // https://www.shaninteriordesign.com/
            link={'https://juliet-ai.vercel.app/'}
          />
          {/* <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          /> */}
          {/* <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Boldo"
            category="We connect our customers with the best, and help them keep up-and stay open."
            image={boldo}
            link={'https://boldo-six.vercel.app/'}
          />
          {/* <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          /> */}
          {/* <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          /> */}
          {/* <ProjectsCard
            title="Jetron"
            category="A platform for you to discover, share and promote your events, Sell your event tickets here!"
            image={jetron}
            link={'https://www.jetronticket.com/'}
          /> */}
          <ProjectsCard
            title="Educenty"
            category="An EduTech ecosystem aimed at bridging the gaps between formal and experiential education "
            image={edu}
            link={'https://www.educenty.org/'}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
