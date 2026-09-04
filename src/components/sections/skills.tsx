import { SectionLabel } from "@/components/ui/section-label";
import { skills } from "@/lib/constants";

export function Skills() {
  return (
    <section id="habilidades" className="section-shell section skills-section">
      <div className="section-intro">
        <SectionLabel>02 · Habilidades</SectionLabel>
        <h2>
          Ferramentas para
          <br />
          <span>construir bem.</span>
        </h2>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, description, icon: Icon }) => (
          <article className="skill-card" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
