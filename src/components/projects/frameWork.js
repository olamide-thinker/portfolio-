import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export const FrameWork = ({tip, iconName}) => {
  return (
    <div title={tip}>
         <Icon className={'h-6 w-6'} icon={iconName}  />
    </div>
  )
}
