import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view. Replaces the previous
 * Framer Motion whileInView animation with a lightweight IntersectionObserver
 * so no animation library ships in the bundle.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -64px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
