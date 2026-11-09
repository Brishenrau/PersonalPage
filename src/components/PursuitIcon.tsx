import type { PursuitIcon } from "../content"

export function PursuitIcon({ name }: { name: PursuitIcon }) {
  switch (name) {
    case "swim":
      return (
        <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M6 20c4 4 8 4 12 0s8-4 12 0 8 4 12 0" />
          <path d="M6 28c4 4 8 4 12 0s8-4 12 0 8 4 12 0" />
        </svg>
      )
    case "jiu":
      return (
        <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="20" cy="24" r="10" />
          <circle cx="28" cy="24" r="10" />
        </svg>
      )
    case "games":
      return (
        <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
          <rect x="8" y="14" width="32" height="20" rx="6" />
          <path d="M18 24h4M20 22v4M30 22v.1M34 26v.1" />
        </svg>
      )
    case "hike":
      return (
        <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M6 34 18 16l8 10 6-8 10 16" />
          <path d="M6 38h36" />
        </svg>
      )
    case "racket":
      return (
        <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
          <ellipse cx="24" cy="17" rx="12" ry="13" />
          <path d="M14 11h20M13 17h22M14 23h20" />
          <path d="M24 30v11" />
        </svg>
      )
  }
}
