import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiHeartInside } from "react-icons/gi";
import ResumeTitle from "./comps/ResumeTitle";
import { ProgressBar } from "./comps/progressBar";
import { KnowledgeCheck } from "./comps/knowledgeCheck";


const Skills = () => {
  return (
    <div className="grid w-full grid-cols-9 gap-10 px-6 lgl:gap-0">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
         <div className="py-4">

        <ProgressBar name={"Photoshop"} progress={95}/>
        <ProgressBar name={"Figma"} progress={95}/>
        <ProgressBar name={"Adobe Illustrator"} progress={70}/>

        </div>
      </div>

      <div className="items-center justify-center hidden w-full h-full lgl:flex">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
      <div className="col-span-9 md:col-span-4">
 
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">

        <ProgressBar name={"English"} progress={90}/>
        <ProgressBar name={"Yoruba"} progress={70}/>

        </div>
      </div>
    
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
 
        <ProgressBar name={"JavaScript"} progress={70}/>
        <ProgressBar name={"Typescript"} progress={90}/>
        <ProgressBar name={"Git/Github"} progress={60}/>
        <ProgressBar name={"Tailwind"} progress={90}/>
        <ProgressBar name={"Reactjs"} progress={60}/>
        <ProgressBar name={"Nextjs"} progress={60}/>
        <ProgressBar name={"Using GPT-coding efficiently"} progress={90}/>
        <ProgressBar name={"Shadcn"} progress={100}/>
        <ProgressBar name={"Tailwind"} progress={90}/>
        <ProgressBar name={"Framer motion"} progress={90}/>
        <ProgressBar name={"animejs"} progress={90}/>
        <ProgressBar name={"Jira/Trello/..."} progress={60}/>
        <ProgressBar name={"Redux/ReduxToolkit"} progress={60}/>
        <ProgressBar name={"Nestjs"} progress={50}/>
        <ProgressBar name={"Nodejs"} progress={60}/>
        
      </div>
      
      <div className="items-center justify-center hidden w-full h-full lgl:flex">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

<div  className="col-span-9 space-y-8 md:col-span-4">

      <div>
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
         <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">

          <KnowledgeCheck name='Website Development'/>
          <KnowledgeCheck name='Website hosting'/>
          <KnowledgeCheck name='Graphics design'/>
          <KnowledgeCheck name='Modern and mobile responsive'/>
          <KnowledgeCheck name='Team Work'/>
          <KnowledgeCheck name='Problem Solving'/>

        </ul>
      </div>

      <div >
        <ResumeTitle title="Interests" icon={<GiHeartInside />} />
         <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">

          <KnowledgeCheck heart name='Discovering a new idea'/>
          <KnowledgeCheck heart name='Learning'/>
          <KnowledgeCheck heart name='Creating useful stuff'/>
          <KnowledgeCheck heart name='Children guidance'/>
          <KnowledgeCheck heart name='Innovation management'/>
          <KnowledgeCheck heart name='Ai appreciation'/>
          <KnowledgeCheck heart name='Optimistic about Africa'/>

        </ul>
      </div>
 </div>

    </div>
  );
};

export default Skills;
