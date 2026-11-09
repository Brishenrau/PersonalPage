import { profile } from "../content"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="kicker">Player record</p>
        <h1>{profile.name}</h1>
        <div className="tick" aria-hidden="true" />
        <p className="lede">{profile.lede}</p>
        <div className="hero-actions">
          <a className="button" href="#projects">View projects</a>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>
        </div>
      </div>

      <aside className="portrait" aria-label="Snapshot">
        <p className="kicker"><span className="dot" aria-hidden="true" /> Present</p>
        <div className="monogram" aria-hidden="true">B</div>
        <dl>
          <div>
            <dt>Study</dt>
            <dd>{profile.study}</dd>
          </div>
          <div>
            <dt>Place</dt>
            <dd>{profile.place}</dd>
          </div>
          <div>
            <dt>Mode</dt>
            <dd>{profile.mode}</dd>
          </div>
        </dl>
      </aside>
    </section>
  )
}
