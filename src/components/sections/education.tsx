import { SectionLabel } from "@/components/ui/section-label";
import { education, softSkills } from "@/lib/constants";

export function Education() {
  return (
    <section id="formacao" className="section-shell section formation-section">
      <div className="section-intro">
        <SectionLabel>04 · Formação</SectionLabel>
        <h2>
          Aprendizado
          <br />
          <span>em movimento.</span>
        </h2>
      </div>
      <div className="formation-content">
        <article className="education-card">
          <p className="card-label">
            {education.label} · {education.status}
          </p>
          <h3>{education.course}</h3>
          <p>{education.institution}</p>
          <span>{education.period}</span>
        </article>

        <div className="soft-skills">
          <p className="card-label">COMO EU TRABALHO</p>
          <div>
            {softSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
