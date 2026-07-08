import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fades and slides content in when it scrolls into view (CSS-driven). */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  const style = delay
    ? ({ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties)
    : undefined

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
