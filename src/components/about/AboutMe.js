import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col pb-6 md:flex-row">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="mb-1 text-lg font-semibold">I'm Olamide Ogundele.</h2>
          <p className="text-base leading-6 ">
          Dedicated and highly skilled Frontend Developer with over 2 years of hands-on experience in building dynamic web applications using JavaScript, TypeScript, React.js, Next.js, Nest.js, Express, and Node.js. Known for delivering high-quality, user-centric solutions and collaborating effectively within cross-functional teams to achieve project goals.
          <br />
          <br />

          My expertise in UI/UX design and software engineering, honed in startup environments, is complemented by a collaborative nature and commitment to quality. Eager to learn and grow, I'm excited to leverage my skills to contribute to your innovative projects and drive business growth
          </p>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2">
        <ul className="flex flex-col gap-1">
          {/* <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li> */}
          <li className="aboutRightLi">
            <span className="">Residence:</span>
            Nigeria
          </li>
          <li className="aboutRightLi">
            <span className="">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="">Address:</span>
            Lagos State, Nigeria
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
