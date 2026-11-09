import { profile } from "../content"
import { useActiveSection } from "../hooks/useActiveSection"

const links = [
  { href: "#pursuits", id: "pursuits", label: "Pursuits" },
  { href: "#projects", id: "projects", label: "Projects" },
] as const

export function Hud() {
  const active = useActiveSection()

  return (
    <header className="hud">
      <a className="brand" href="#top">{profile.name}</a>
      <p className="hud-status">
        <span>{profile.place}</span>
        <span>{profile.study}</span>
        <span>{profile.aim}</span>
      </p>
      <nav aria-label="Page">
        {links.map((link) => (
          <a key={link.id} href={link.href} aria-current={active === link.id ? "true" : undefined}>
            {link.label}
          </a>
        ))}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <kbd>G</kbd>
        </a>
      </nav>
    </header>
  )
}
