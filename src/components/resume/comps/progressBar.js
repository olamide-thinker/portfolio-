import React from 'react'

export const ProgressBar = ({name, progress}) => {
  return (
    <div className="py-3 border-b-[1px] border-zinc-800">
      <p className="text-base text-textColor -mb-1.5">{name}</p>
      <span className="relative inline-flex w-full h-1 bg-zinc-600">
        <span className={`w-[${progress}%] h-full absolute top-0 left-0 bg-designColor/30`}></span>
      </span>
    </div>
  )
}
