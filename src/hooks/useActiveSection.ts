import { useEffect, useState } from "react"

const sectionIds = ["pursuits", "projects"]

export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        setActive(entry.target.id)
      })
    }, { rootMargin: "-45% 0px -45% 0px" })

    sections.forEach((section) => spy.observe(section))
    return () => spy.disconnect()
  }, [])

  return active
}
