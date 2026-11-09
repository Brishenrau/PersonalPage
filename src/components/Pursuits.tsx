import { pursuits } from "../content"
import { PursuitCard } from "./PursuitCard"

export function Pursuits() {
  const hobbies = pursuits.filter((pursuit) => pursuit.kind === "hobby")
  const interests = pursuits.filter((pursuit) => pursuit.kind === "interest")

  return (
    <section id="pursuits" className="section">
      <div className="section-head">
        <p className="kicker">01</p>
        <h2>Pursuits</h2>
        <p>Three things I actually practice, and two I like but do not do often enough to call hobbies.</p>
      </div>

      <div className="cards">
        {hobbies.map((pursuit) => (
          <PursuitCard key={pursuit.index} pursuit={pursuit} />
        ))}
      </div>

      <p className="group-label">On the list, not hobbies yet</p>

      <div className="cards cards-two">
        {interests.map((pursuit) => (
          <PursuitCard key={pursuit.index} pursuit={pursuit} />
        ))}
      </div>
    </section>
  )
}
