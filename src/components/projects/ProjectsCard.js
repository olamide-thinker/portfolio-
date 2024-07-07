import React from "react";

const ProjectsCard = ({ image, title, description, link }) => {
  return (
    <a target="_blank" href={link}>

      <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
        <div className="relative w-full h-full mb-3 overflow-hidden cursor-pointer group">
          <img
            className="object-cover w-full h-full duration-300 scale-100 cursor-pointer group-hover:scale-110" src={image}
            alt="ImageOne"
          />
          <div className="absolute top-0 left-0 w-full h-full hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
        </div>
        <h3 className="font-titleFont text-center text-lg font-semibold text-[#ccc]">
          {title}
        </h3>
        <p className="-mt-1 text-base text-center text-gray-400">{description}</p>
      </div>

   </a>
  );
};

export default ProjectsCard;
