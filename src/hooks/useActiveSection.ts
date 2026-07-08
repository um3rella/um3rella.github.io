import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in view so the navbar
 * can highlight the matching link. Clears the highlight when no
 * tracked section is in view (e.g. at the very top of the page).
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // Highlight the first section (in document order) still in view.
        const next = sectionIds.find((id) => visible.has(id)) ?? ''
        setActive(next)
      },
      // Trigger when a section crosses the upper-middle of the viewport
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
