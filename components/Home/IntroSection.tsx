'use client'
import { motion } from "motion/react"

const IntroSection = () => {
  return (
    <div className="sm:pt-40 pt-30 flex items-center justify-center flex-col tracking-[-1.44px] leading-[55.68px] font-semibold">
        <motion.h1 
            className="sm:text-5xl text-2xl text-black"
            initial={{ filter: "blur(10px)", opacity:0, y:12 }}
            animate={{ filter: "blur(0)", opacity:1, y:0 }}
            transition={{ duration : 0.5, delay:0.1 }}
        >
            Hi, I’m Subramanian.
        </motion.h1>
        <motion.h2
            className="sm:text-5xl text-2xl text-muted"
            initial={{ filter: "blur(8px)", opacity:0, y:12 }}
            animate={{ filter: "blur(0)", opacity:1, y:0 }}
            transition={{ duration : 0.5, delay:0.4 }}
        >
            I build things on the internet and
        </motion.h2>
        <motion.h2
            className="sm:text-5xl text-2xl text-muted"
            initial={{ filter: "blur(4px)", opacity:0, y:12 }}
            animate={{ filter: "blur(0)", opacity:1, y:0 }}
            transition={{ duration : 0.5, delay:0.8 }}
        >
            Sometimes they even work
        </motion.h2>
    </div>
  )
}

export default IntroSection