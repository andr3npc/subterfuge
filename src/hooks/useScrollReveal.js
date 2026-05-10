import { useEffect, useRef } from 'react'

export function useScrollReveal(selector = '[data-reveal]', delay = 150) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = Array.from(container.querySelectorAll(selector))
    if (elements.length === 0) return

    function reveal() {
      elements.forEach((el, i) => {
        if (el.classList.contains('visible')) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 40) {
          setTimeout(() => el.classList.add('visible'), i * delay)
        }
      })
    }

    reveal()
    window.addEventListener('scroll', reveal)
    return () => window.removeEventListener('scroll', reveal)
  }, [selector, delay])

  return containerRef
}
