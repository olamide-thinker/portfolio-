import React from "react";
import { BiChevronDown } from "react-icons/bi";

const ResumeCard = ({ badge, title, subTitle, des, responsibility }) => {

  const [accord, setAccord] = React.useState(false)

  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "" ? (
        <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          {/* 2013-Present */}
        </h6>
      ) : (
        <h6 className="w-fit px-2 text-center text-sm py-[1px] text-[#999]  border-[1px] border-zinc-600 rounded-sm">
          {badge}
        </h6>
      )}
      <h2 className="text-lg font-medium text-gray-200 text-bold font-titleFont">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <div className="text-base text-[#999] font-medium pr-10">
      <div>

      <p>{des}</p>
      <div  className="items-center gap-4 group">
      <div onClick={()=>{ setAccord(!accord)}} className="flex items-center gap-4">
     <h3 className="py-2 text-white cursor-pointer group-hover:text-designColor">Responsibilities:</h3>
     <BiChevronDown className=" text-designColor" color="designColor"/>
     </div>
      {accord &&
     <ol className="pl-4 space-y-2 list-decimal list-inside w-80%">
      { responsibility.map((content)=>(
          <li>{content}</li>
        ))
      }
    </ol>
     }
    </div>
      </div>
    </div>
    </div>
  );
};

export default ResumeCard;
