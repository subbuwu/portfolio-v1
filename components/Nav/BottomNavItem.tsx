'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type Props = {
  title: string
  icon: React.ReactNode
  href: string
  isMail?: boolean
}

const BottomNavItem = ({ title, icon, href, isMail = false }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const [showBadge, setShowBadge] = useState(false)

  return (
    <div
      className={clsx(
        'relative cursor-pointer p-3 sm:p-5 flex items-center justify-center rounded-[18px] border border-border_color transition-colors',
        isActive ? 'text-[#1e6ef4]' : 'text-muted',
        isMail ? 'bg-[#1e6ef4] text-white' : 'bg-white'
      )}
      onMouseEnter={() => setShowBadge(true)}
      onMouseLeave={() => setShowBadge(false)}
    >
      {icon}

      <AnimatePresence>
        {showBadge && (
          <motion.span
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm px-2 py-1 rounded-lg bg-bg_muted text-black border border-border_color whitespace-nowrap font-medium"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 20,
              mass: 0.6,
            }}
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BottomNavItem
