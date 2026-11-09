import type { CSSProperties } from "react"
import type { Pursuit } from "../content"
import { useInView } from "../hooks/useInView"
import { PursuitIcon } from "./PursuitIcon"

function vars(values: Record<`--${string}`, string>): CSSProperties {
  return values as CSSProperties
}

export function PursuitCard({ pursuit }: { pursuit: Pursuit }) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <article
      ref={ref}
      className={pursuit.kind === "interest" ? "card card-quiet" : "card"}
      style={vars({ "--accent": pursuit.accent })}
    >
      <header className="card-top">
        <span className="index">{pursuit.index}</span>
        <span className="tag">{pursuit.tag}</span>
      </header>
      <PursuitIcon name={pursuit.icon} />
      <h3>{pursuit.name}</h3>
      <p>{pursuit.summary}</p>
      <div className={inView ? "meter is-in" : "meter"} style={vars({ "--value": pursuit.value })}>
        <span className="meter-label">{pursuit.meterLabel}</span>
        <span className="meter-track">
          <span className="meter-fill" />
        </span>
      </div>
    </article>
  )
}
