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
import AfriGoods from '../../assets/work/AfricanGood.png'
import SalesP from '../../assets/work/petty.png'

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
          link={'https://www.shaninteriordesign.com/'}
            title="Shan Interiors"
            description="Shan Interiors Ltd an interior design company focused on commercial and domestic interior design services in Nigeria"
            image={shan}
          />
          {/* <ProjectsCard
            title="juliet-Ai "
            description="Is a conversational AI tech expert who helps you throughout your tech journey—the 
            Future of Scalable Learning "
            image={juliet}
            // https://www.shaninteriordesign.com/
            link={'https://juliet-ai.vercel.app/'}
          /> */}
          <ProjectsCard
            title="AfrMarket (UI Design-Figma)"
            description="Made this Landing page for a client to be developed using wordpress"
            image={AfriGoods}
            link={'https://www.figma.com/proto/9Z06E5dNpEgSz3z93Sl5rH/Commerce-landing-page-for-mr-Niyi?page-id=0%3A1&node-id=1-29&viewport=601%2C436%2C0.1&t=UflTuC7TlNlHVpBG-1&scaling=scale-down-width&content-scaling=fixed'}
          />
    
          {/* <ProjectsCard
            title="Infinity Logo"
            description="Logo"
            image={workImgTwo}
          /> */}
          {/* <ProjectsCard
            title="Mobile Application"
            description="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
   
                <ProjectsCard
            title="SalesP (UI Design-Figma)"
            description="A very simplified sales engine helps sales reps with peeking into inventory and client manager."
            image={SalesP}
             link={'https://www.figma.com/proto/cU0quhWkjuKUocT0fjZYlF/iPetty?page-id=572%3A3117&node-id=678-6274&viewport=2969%2C4068%2C0.41&t=bdiNiAj5OnBdoqjh-1&scaling=contain&content-scaling=fixed&starting-point-node-id=573%3A3187'}
          />
          {/* <ProjectsCard
            title="Grapic Design"
            description="Design"
            image={workImgSix}
          /> */}
          {/* <ProjectsCard
            title="Ideas & Blog"
            description="Website"
            image={workImgEight}
          /> */}
          {/* <ProjectsCard
            title="Jetron"
            description="A platform for you to discover, share and promote your events, Sell your event tickets here!"
            image={jetron}
            link={'https://www.jetronticket.com/'}
          /> */}
          <ProjectsCard
            title="Educenty"
            description="An EduTech ecosystem aimed at bridging the gaps between formal and experiential education "
            image={edu}
            link={'https://www.educenty.org/'}
          />
                 {/* <ProjectsCard
            title="Boldo"
            description="We connect our customers with the best, and help them keep up-and stay open."
            image={boldo}
            link={'https://boldo-six.vercel.app/'}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
