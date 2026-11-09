export const profile = {
  name: "Brishen",
  study: "Computer science",
  place: "Sunway",
  aim: "Renaissance man",
  mode: "Will try anything",
  lede: "Computer science student at Sunway, trying to become a Renaissance man: willing to try anything and everything.",
  github: "https://github.com/Brishenrau",
  githubLabel: "github.com/Brishenrau",
} as const

export type PursuitIcon = "swim" | "jiu" | "games" | "hike" | "racket"

export type Pursuit = {
  index: string
  name: string
  tag: string
  summary: string
  meterLabel: string
  value: string
  accent: string
  kind: "hobby" | "interest"
  icon: PursuitIcon
}

export type Project = {
  index: string
  title: string
  summary: string
  meta: string
  href: string
}

export const pursuits: Pursuit[] = [
  {
    index: "01",
    name: "Swimming",
    tag: "Hobby",
    summary: "Laps, and a quiet hour that does not involve a screen.",
    meterLabel: "A regular practice",
    value: "74%",
    accent: "#7ecfc8",
    kind: "hobby",
    icon: "swim",
  },
  {
    index: "02",
    name: "Jiujutsu",
    tag: "Hobby",
    summary: "Grappling. A hobby where you find out quickly whether the idea worked.",
    meterLabel: "A regular practice",
    value: "68%",
    accent: "#e08a72",
    kind: "hobby",
    icon: "jiu",
  },
  {
    index: "03",
    name: "Video games",
    tag: "Main hobby",
    summary: "Where most of the free time goes. This page borrows the shape of a status screen from that habit.",
    meterLabel: "Most of the time",
    value: "92%",
    accent: "#c6dc86",
    kind: "hobby",
    icon: "games",
  },
  {
    index: "04",
    name: "Hiking",
    tag: "Interest",
    summary: "I like getting out. I do not do it often enough to claim it as a hobby.",
    meterLabel: "Not often enough",
    value: "28%",
    accent: "#d9c7a1",
    kind: "interest",
    icon: "hike",
  },
  {
    index: "05",
    name: "Racket sports",
    tag: "Interest",
    summary: "Most of them. Happy to play, and still short on court time.",
    meterLabel: "Not often enough",
    value: "24%",
    accent: "#d9c7a1",
    kind: "interest",
    icon: "racket",
  },
]

export const projects: Project[] = [
  {
    index: "Q-01",
    title: "BHR Systems",
    summary: "A web rebuild of my dad’s server-based system.",
    meta: "TypeScript / View on GitHub",
    href: "https://github.com/Brishenrau/BHR-Systems-2.0",
  },
]

export const archive: Project = {
  index: "Archive",
  title: "GitHub",
  summary: "Experiments and smaller ideas stay here until they earn a card of their own.",
  meta: profile.githubLabel,
  href: profile.github,
}
