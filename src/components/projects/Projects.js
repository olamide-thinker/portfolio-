import React from "react";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard"
import shan from '../../assets/work/Shan.png'

import edu from '../../assets/work/edu.png'
import AfriGoods from '../../assets/work/AfricanGood.png'
import SalesP from '../../assets/work/petty.png'
import MichaelMusic from '../../assets/work/MichaelShanuMusic.png'
import pacificSchools from '../../assets/work/pacificSchools.png'

import { FrameWork } from "./frameWork";



const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lgl:gap-10">
        <div className="px-6">

        <ProjectsCard
            title="Michael Shanu"
            description="I was responsible for UI/UX from end and connecting to firebase to store sounds and images for faster render"
            image={MichaelMusic}
            link={'https://www.michaelshanu.com'}
            stack={<>

         <FrameWork tip={'Figma'} iconName={"devicon:figma"}/>
            <FrameWork tip={'Firebase'} iconName={"vscode-icons:file-type-firebasehosting" }/>
             <FrameWork tip={'Shadcn UI'} iconName={"simple-icons:shadcnui"}/>
             <FrameWork tip={'NextJs'} iconName={"logos:nextjs-icon"}/>
             <FrameWork tip={'Tailwind'} iconName={"logos:tailwindcss-icon" }/>
             <FrameWork tip={'TypeScript'} iconName={"logos:typescript-icon" }/>
         
            </>}
          />

<ProjectsCard
    title="SyncSalez (Multi-Tenant Mobile App)"
    description="Engineered a scalable full-stack mobile application supporting multi-tenancy (organizations and branches). Focused on performance, code reusability, and advanced state management."
    image={SyncSalezImage} // Placeholder for your image
    link={'#'} // Replace with actual app store or demo link if available
    stack={<>
        <FrameWork tip={'React Native (Expo)'} iconName={"logos:react"}/>
        <FrameWork tip={'NestJS'} iconName={"logos:nestjs"}/>
        <FrameWork tip={'Supabase'} iconName={"logos:supabase"}/>
        <FrameWork tip={'React Query'} iconName={"logos:react-query-icon"}/>
        <FrameWork tip={'Zustand'} iconName={"simple-icons:zustand"}/>
        <FrameWork tip={'Drizzle ORM'} iconName={"logos:drizzle"}/>
        <FrameWork tip={'Tailwind CSS'} iconName={"logos:tailwindcss-icon"}/>
        <FrameWork tip={'Redis'} iconName={"logos:redis"}/>
        <FrameWork tip={'MQTT'} iconName={"logos:mqtt"}/>
    </>}
/>



<ProjectsCard
    title="Laptopwarehouse (E-commerce Platform)"
    description="Designed and implemented a full-stack, single-store e-commerce platform from the ground up, integrating custom components and security analytics."
    image={LaptopWarehouseImage} // Placeholder for your image
    link={'#'} // Replace with live link if available
    stack={<>
        <FrameWork tip={'Next.js'} iconName={"logos:nextjs-icon"}/>
        <FrameWork tip={'Firebase'} iconName={"vscode-icons:file-type-firebasehosting"}/>
        <FrameWork tip={'React'} iconName={"logos:react"}/>
        <FrameWork tip={'Splunk'} iconName={"logos:splunk"}/>
    </>}
/>


<ProjectsCard
    title="PowerBIM (Industrial Asset Monitoring)"
    description="Developed a 'Digital Twin' solution for industrial asset monitoring. Built dynamic dashboards, visual maps, and integrated IoT and cloud functions for real-time data."
    image={PowerBIMImage} // Placeholder for your image
    link={'https://www.powerbim.com'} // Link provided in your content
    stack={<>
        <FrameWork tip={'React'} iconName={"logos:react"}/>
        <FrameWork tip={'IoT'} iconName={"eos-icons:iot"}/>
        <FrameWork tip={'Cloud Functions'} iconName={"logos:google-cloud"}/>
        <FrameWork tip={'Data Visualization'} iconName={"tabler:dashboard"}/>
    </>}
/>



<ProjectsCard
    title="Bulqpay (Omni-Channel Payment Interfaces)"
    description="Led development of secure, omni-channel payment UIs adhering to PCI-DSS standards. Implemented smart-checkout with real-time fraud detection and Google Analytics sync."
    image={BulqpayImage} // Placeholder for your image
    link={'https://www.bulqpay.com'} // Link provided in your content
    stack={<>
        <FrameWork tip={'Payment Services'} iconName={"logos:stripe"}/>
        <FrameWork tip={'PCI-DSS'} iconName={"simple-icons:pcigaming"}/>
        <FrameWork tip={'Tokenization'} iconName={"ri:secure-payment-line"}/>
        <FrameWork tip={'Google Analytics'} iconName={"logos:google-analytics"}/>
    </>}
/>


<ProjectsCard
    title="Plural (HealthTech Admin & Patient Dashboards)"
    description="Engineered core hospital admin panels and patient dashboards, streamlining clinical workflows and improving data visualization in a HealthTech environment."
    image={PluralImage} // Placeholder for your image
    link={'https://www.plural.health'} // Link provided in your content
    stack={<>
        <FrameWork tip={'Next.js'} iconName={"logos:nextjs-icon"}/>
        <FrameWork tip={'Redux Toolkit'} iconName={"logos:redux"}/>
        <FrameWork tip={'React'} iconName={"logos:react"}/>
    </>}
/>



<ProjectsCard
    title="Adjunqy (AI-Powered Social Media Manager)"
    description="Developed the core frontend architecture for an AI-powered social media manager, focusing on modularity, mobile responsiveness, and integrating OpenAI APIs."
    image={AdjunqyImage} // Placeholder for your image
    link={'https://www.adjunqy.com'} // Link provided in your content
    stack={<>
        <FrameWork tip={'React'} iconName={"logos:react"}/>
        <FrameWork tip={'RTK Query'} iconName={"logos:redux"}/>
        <FrameWork tip={'OpenAI API'} iconName={"logos:openai-icon"}/>
        <FrameWork tip={'UI/UX Strategy'} iconName={"devicon:figma"}/>
    </>}
/>



              

          <ProjectsCard
          link={'https://www.shaninteriordesign.com/'}
            title="Shan Interiors"
            description="Shan Interiors Ltd an interior design company focused on commercial and domestic interior design services in Nigeria"
            image={shan}
             stack={<>
          
            <FrameWork tip={'Figma'} iconName={"devicon:figma"}/>
            <FrameWork tip={'Firebase'} iconName={"vscode-icons:file-type-firebasehosting" }/>
             <FrameWork tip={'Shadcn UI'} iconName={"simple-icons:shadcnui"}/>
             <FrameWork tip={'NextJs'} iconName={"logos:nextjs-icon"}/>
             <FrameWork tip={'Tailwind'} iconName={"logos:tailwindcss-icon" }/>
             <FrameWork tip={'TypeScript'} iconName={"logos:typescript-icon" }/>

            </>}
          />
   
      
          <ProjectsCard
            title="AfrMarket (UI Design-Figma)"
            description="Made this Landing page for a client to be developed using wordpress"
            image={AfriGoods}
            link={'https://www.figma.com/proto/9Z06E5dNpEgSz3z93Sl5rH/Commerce-landing-page-for-mr-Niyi?page-id=0%3A1&node-id=1-29&viewport=601%2C436%2C0.1&t=UflTuC7TlNlHVpBG-1&scaling=scale-down-width&content-scaling=fixed'}
            stack={<>
              <FrameWork tip={'Figma'} iconName={"devicon:figma"}/>
              </>}
          />
    
   
        </div>
        <div className="px-6">
   
                <ProjectsCard
            title="Pacific Schools (website)"
            description="Leverage wordpress to building this school website from design to completion"
            image={pacificSchools}
             link={'https://pacificschools.com.ng/'}
             stack={<>

               <FrameWork tip={'Wordpress'} iconName={"skill-icons:wordpress"}/>
      
              </>}
          />

<ProjectsCard
            title="SalesP (UI Design-Figma)"
            description="A very simplified sales engine helps sales reps with peeking into inventory and client manager."
            image={SalesP}
             link={'https://www.figma.com/proto/cU0quhWkjuKUocT0fjZYlF/iPetty?page-id=572%3A3117&node-id=678-6274&viewport=2969%2C4068%2C0.41&t=bdiNiAj5OnBdoqjh-1&scaling=contain&content-scaling=fixed&starting-point-node-id=573%3A3187'}
             stack={<>
                <FrameWork tip={'Figma'} iconName={"devicon:figma"}/>
              </>}
          />


          <ProjectsCard
            title="Educenty"
            description="An EduTech ecosystem aimed at bridging the gaps between formal and experiential education "
            image={edu}
            link={'https://www.educenty.org/'}
            stack={<>
            
             <FrameWork tip={'Figma'} iconName={"devicon:figma"}/>
             <FrameWork tip={'Shadcn UI'} iconName={"simple-icons:shadcnui"}/>
             <FrameWork tip={'NextJs'} iconName={"logos:nextjs-icon"}/>
             <FrameWork tip={'Tailwind'} iconName={"logos:tailwindcss-icon" }/>
             <FrameWork tip={'TypeScript'} iconName={"logos:typescript-icon" }/>
             <FrameWork tip={'Redux Tool Kit'} iconName={"skill-icons:redux"}/>
            
              </>}
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
