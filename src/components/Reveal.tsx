import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger index — multiplied into a small delay, per spec §Motion. */
  index?: number
  /** Vertical offset in px before entry; spec calls for 8–12px. */
  offset?: number
}

/**
 * Shared scroll-entry animation per the Editorial Case File motion spec:
 * fade + translate-Y (8–12px), 200–300ms, ease-out, once on view. Fully
 * no-op when the user prefers reduced motion.
 */
export function Reveal({ children, className, index = 0, offset = 10 }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
