import { ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projetos" className="section-shell section projects-section">
      <div className="projects-head">
        <div>
          <SectionLabel>05 · Projetos</SectionLabel>
          <h2>
            Ideias que ganharam
            <br />
            <span>forma e função.</span>
          </h2>
        </div>
        <p>
          Uma seleção de projetos que traduzem minha forma de pensar produto,
          código e experiência.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            className={`project-card ${i === 0 ? "featured" : ""}`}
            key={project.title}
          >
            <div className="project-number">0{i + 1}</div>
            <p className="card-label">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="stack">{project.stack}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {project.action} <ExternalLink />
            </a>
          </article>
        ))}
      </div>

      <div className="project-cta">
        <p>Tem uma ideia em mente?</p>
        <Button href="#contato">Vamos conversar</Button>
      </div>
    </section>
  );
}
