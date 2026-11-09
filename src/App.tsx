import { Hero } from "./components/Hero"
import { Hud } from "./components/Hud"
import { Projects } from "./components/Projects"
import { Pursuits } from "./components/Pursuits"
import { useGithubShortcut } from "./hooks/useGithubShortcut"

function Frame() {
  return (
    <div className="frame" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export function App() {
  useGithubShortcut()

  return (
    <div id="top">
      <a className="skip" href="#content">Skip to content</a>
      <Frame />
      <Hud />
      <main id="content">
        <Hero />
        <Pursuits />
        <Projects />
      </main>
      <footer className="colophon">
        <p>Brishen · Sunway</p>
        <p>A personal page dressed like a game menu.</p>
      </footer>
    </div>
  )
}
