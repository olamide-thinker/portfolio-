import React from 'react'

export const SideMenuIcon = ({name, state, icon, action}) => {
  return (
    <span
    onClick={action}
    className={`${
      state
        ? "text-designColor"
        : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
    } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
  >
    {icon}
    <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
     {name}
    </span>
  </span>
  )
}
