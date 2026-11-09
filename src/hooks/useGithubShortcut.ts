import { useEffect } from "react"
import { profile } from "../content"

export function useGithubShortcut() {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "g" || event.metaKey || event.ctrlKey || event.altKey) return
      if (event.target instanceof Element && event.target.closest("input, textarea, select, a, button")) return
      window.open(profile.github, "_blank", "noopener,noreferrer")
    }

    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])
}
