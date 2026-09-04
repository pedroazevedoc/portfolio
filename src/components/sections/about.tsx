import { Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { aboutHighlights } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="section-shell section">
      <div className="section-intro">
        <SectionLabel>01 · Sobre</SectionLabel>
        <h2>
          Da complexidade
          <br />
          <span>à clareza.</span>
        </h2>
      </div>
      <div className="about-content">
        <p className="lead">
          Desenvolvedor Full Stack motivado a transformar sistemas complexos em
          aplicações escaláveis, de alta performance e orientadas a resultados.
        </p>
        <p>
          Meu diferencial está na capacidade de transitar entre o código e a
          regra de negócio: iniciei minha trajetória no suporte técnico, o que me
          deu uma visão privilegiada das dores do usuário final, e hoje traduzo
          essa experiência em arquiteturas robustas.
        </p>
        <div className="about-grid">
          {aboutHighlights.map(({ title, description }) => (
            <article key={title}>
              <Check />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
