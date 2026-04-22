import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SlideUpProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
}

export default function SlideUp({
  children,
  className = '',
  delay = 0,
  duration = 1,
  distance = 40,
  once = true,
}: SlideUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}