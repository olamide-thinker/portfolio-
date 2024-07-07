import React from "react";
import ResumeTitle from "./comps/ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./comps/ResumeCard";




const experience = [
  {
    badge:"May 2022 - present", 
    title:"Educenty",
    des:'Frontend Developer and Product Designer',
    responsibilities:[
      "Ideated, conceptualized, and designed a comprehensive educational technology ecosystem.",
      "Spearheaded the creation and implementation of product designs and system architecture.",
      "Developed and deployed the frontend of the web application using Next.js.",
      "Collaborated with a diverse team to integrate the frontend with backend technologies.",
      "Exhibited strong problem-solving skills by effectively tackling and resolving intricate technical challenges.",
      "Led personalized mentorship programs, providing guidance and support to aspiring tech professionals.",
      "Fostered a culture of knowledge sharing and skill development within the team."

    ]
  },
  {
    badge:"Oct 2022 - present", 
    title:"Shan Interiors Ltd",
    des:'Freelance graphic artist and web site development',
    responsibilities:[
    "Led brainstorming sessions to generate innovative methods for presenting designed collaterals to prospective clients in both digital and print formats.",
    "Incorporated feedback and suggestions to continuously improve design quality and effectiveness.",
    "Supervised a team of designers, ensuring synergy and making necessary corrections to maintain high standards.",
    "Utilized Adobe Creative Suite (Photoshop, Illustrator, InDesign) to design and refine graphics, logos, and other visual elements and collateral."

    ]
  },
  {
    badge:" Jun 2021 - Mar 2023", 
    title:"Polo Luxury",
    des:'Inhouse Graphics Designer',
    responsibilities:[
    "Contributed to brainstorming sessions and provided creative input for design concepts and strategies.",
      "Incorporated suggestions to improve design quality and effectiveness.",
      "Actively sought opportunities to learn and grow professionally, attending workshops, webinars, and industry events to expand skills and knowledge in graphic design.",
      "Utilized Figma, Adobe Photoshop, Illustrator, and InDesign to design and refine graphics, logos, and other visual elements."

    ]
  },
  {
    badge:" Nov 2019 - Apr 2021", 
    title:"Rendize",
    des:'UI/UX Designer',
    responsibilities:[
      "Participated in usability studies, observing users as they interacted with prototypes or existing products.",
        "Recorded and analyzed user interactions during testing sessions to identify usability issues and areas for improvement.",
        "Contributed to the synthesis of user feedback and findings into actionable insights for the design team.",
        "Conducted research on competitors' products and services to identify trends and best practices in the industry.",
        "Designed the interfaces using Adobe XD and Photoshop."


    ]
  },
]




const Experience = () => {
  return (
    <div className="grid w-full grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-9">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        
        { experience.map((data)=>(

                  <ResumeCard
                    badge={data.badge}
                    title={data.title}
                    // subTitle="Teens CAn Code"
                    des={data.des}
                    responsibility={data.responsibilities}
                  />
        ))
        }

     </div>
      {/*  <div className="items-center justify-center hidden w-full h-full lgl:flex">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div> */}
      {/* <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2020"
          title="MERN Stack Developer"
          subTitle="Lagos, Nigeria"
          des="Level-Up Institute - (Lagos Nigeria)."
        />
          <ResumeCard
            badge="2016-2020 "
            title="Bachelor of Science Computer Science"
            subTitle="Lagos State, Nigeria"
            des=""
          />

        <ResumeCard
          // badge="2014 - 2019"
          title="Diploma Computer Engr Tech."
          subTitle="Nigeria Institute of Technology"
          des="Diploma in computer engineering technology."
        />
      </div> */}
    </div>
  );
};

export default Experience ;
