import { archive, profile, projects, type Project } from "../content"

function QuestCard({ project }: { project: Project }) {
  return (
    <a className="quest" href={project.href} target="_blank" rel="noopener noreferrer">
      <span className="index">{project.index}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span className="quest-meta">{project.meta}</span>
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <p className="kicker">02</p>
        <h2>Projects</h2>
        <p>Personal work I am willing to show. The list is short on purpose, and it can grow.</p>
      </div>

      <div className="quests">
        {projects.map((project) => (
          <QuestCard key={project.href} project={project} />
        ))}
        <a className="quest quest-profile" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span className="index">{archive.index}</span>
          <h3>{archive.title}</h3>
          <p>{archive.summary}</p>
          <span className="quest-meta">{archive.meta}</span>
        </a>
      </div>
    </section>
  )
}
