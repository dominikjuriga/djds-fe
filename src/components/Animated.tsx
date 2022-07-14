import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode,
  animationDelay?: number,
  animationDuration?: number,
  className?: string,
}

const Animated = ({ children, animationDelay = 0, animationDuration = 1, className = "" }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: "50px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: animationDuration, delay: animationDelay }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Animated