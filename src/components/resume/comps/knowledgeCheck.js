import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { TbClover } from "react-icons/tb";

export const KnowledgeCheck = ({name,heart}) => {
  return (
    <li className="flex items-center gap-4 text-textColor">
    <span className="text-lg text-designColor/60">
 {  !heart  ?   <GiCheckMark />
     : <TbClover />}
    </span>
    {name}
  </li>
  )
}
