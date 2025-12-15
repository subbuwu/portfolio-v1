'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type Props = {
  icon: React.ReactNode
  href: string
  isMail?: boolean;
}

const BottomNavItem = ({icon, href, isMail = false} : Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className={clsx(" cursor-pointer p-5 flex items-center justify-center rounded-[18px] border border-border", 
        isActive ? "text-[#1e6ef4]" : "text-muted",
        isMail ? "bg-[#1e6ef4] text-white" : "bg-white"
     )}>
        {icon}
    </div>
  )
}

export default BottomNavItem