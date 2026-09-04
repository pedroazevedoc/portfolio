import { SectionLabel } from "@/components/ui/section-label";
import { experiences } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experiencia" className="section-shell section">
      <div className="section-intro">
        <SectionLabel>03 · Experiência</SectionLabel>
        <h2>
          Experiência que
          <br />
          <span>resolve problemas.</span>
        </h2>
      </div>
      <div className="timeline">
        {experiences.map((exp) => (
          <article
            className={`timeline-item ${exp.current ? "current" : ""}`}
            key={exp.role}
          >
            <div className="timeline-marker" />
            <div className="timeline-meta">
              <span>{exp.period}</span>
              {exp.current && <b>Atual</b>}
            </div>
            <div>
              <h3>{exp.role}</h3>
              <h4>
                {exp.company} <span>·</span> {exp.location}
              </h4>
              <ul>
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="tech-line">{exp.techLine}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
