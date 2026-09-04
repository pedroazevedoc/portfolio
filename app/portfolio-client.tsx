"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Layers3,
  Database,
  Cloud,
  Boxes,
  ShieldCheck,
} from "lucide-react";

const sections = ["sobre", "habilidades", "experiencia", "formacao", "projetos", "contato"];

const skills = [
  ["Backend & APIs", "PHP (Laravel e Lumen), Node.js (NestJS e Express.js)", Code2],
  ["Frontend & Mobile", "JavaScript & TypeScript (React, Next.js), Vue.js, React Native e Blade", Layers3],
  ["Bancos de Dados & Cache", "PostgreSQL, MySQL, MongoDB e Redis", Database],
  ["DevOps & Cloud", "AWS Cloud, Docker, CI/CD (GitHub Actions), Git, RabbitMQ", Cloud],
  ["Arquitetura & Design", "Clean Architecture, Monolito Modular, Microsserviços, REST", Boxes],
  ["Qualidade & Gestão", "PHPUnit, Cypress.js, Scrum & Jira", ShieldCheck],
] as const;

const projects = [
  {
    title: "Gerador de Listas",
    type: "Projeto publicado",
    desc: "Plataforma para criação e personalização de listas dinâmicas em PDF, com edição em tempo real e motor de estilização customizável.",
    stack: "TypeScript · React · Next.js · react-pdf · Tailwind",
    url: "https://geradorlistas.vercel.app",
    action: "Visitar projeto",
    live: true,
  },
  {
    title: "Conteúdos API",
    type: "Projeto público",
    desc: "API RESTful completa para gerenciamento de conteúdos como posts, vídeos e comentários, desenvolvida com foco em segurança e escalabilidade.",
    stack: "PHP · Laravel · MySQL · Docker · Sanctum · Scramble",
    url: "https://github.com/pedroazevedoc/api-conteudos",
    action: "Ver repositório",
  },
  {
    title: "Gestão de saúde",
    type: "Projeto público",
    desc: "Sistema web responsivo para gerenciamento de endereços e pacientes, com API em Laravel e interface Vue.js integrada à ViaCep.",
    stack: "PHP · Laravel · MySQL · Vue.js · Docker",
    url: "https://github.com/pedroazevedoc/health-management",
    action: "Ver repositório",
  },
  {
    title: "Biblioteca Rápida",
    type: "Projeto público",
    desc: "Aplicação para consulta e curadoria de livros integrada à OpenLibrary API, com buscas globais e gerenciamento de favoritos.",
    stack: "JavaScript · React · Vite · React Router DOM · OpenLibrary",
    url: "https://github.com/pedroazevedoc/fast-library",
    action: "Ver repositório",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a href={href} className={`button ${secondary ? "button-secondary" : ""}`}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function PortfolioClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("sobre");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <span>PA</span>
          <strong>
            Pedro Azevedo<span>.</span>
          </strong>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={active === id ? "active" : ""}
            >
              {id === "formacao" ? "Formação" : id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="#contato" className="nav-cta" onClick={closeMenu}>
            Falar comigo <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section-shell">
          <div className="hero-copy">
            <p className="kicker">DESENVOLVEDOR FULL STACK</p>
            <h1>
              Transformo ideias em experiências digitais{" "}
              <em>que geram resultados.</em>
            </h1>
            <p className="hero-text">
              Desenvolvedor focado em construir soluções que unem excelência
              técnica e valor real de negócio.
            </p>

            <div className="hero-actions">
              <ButtonLink href="#contato">Solicitar orçamento</ButtonLink>
              <ButtonLink href="#projetos" secondary>
                Ver projetos <span className="arrow-down">↓</span>
              </ButtonLink>
            </div>

            <div className="availability">
              <span className="pulse" /> Disponível para novos projetos{" "}
              <span className="line" /> Caratinga, MG
            </div>
          </div>

          <div className="code-panel" aria-label="Composição visual com código">
            <div className="code-top">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span>pedro-azevedo.ts</span>
              <span>•••</span>
            </div>
            <div className="code-body">
              <span className="line-num">01</span>
              <p>
                <b>const</b> developer = &#123;
              </p>
              <span className="line-num">02</span>
              <p>
                &nbsp;&nbsp;name: <i>&quot;Pedro Azevedo Costa&quot;</i>,
              </p>
              <span className="line-num">03</span>
              <p>
                &nbsp;&nbsp;role: <i>&quot;Full Stack Engineer&quot;</i>,
              </p>
              <span className="line-num">04</span>
              <p>
                &nbsp;&nbsp;mindset: <i>&quot;business_first&quot;</i>,
              </p>
              <span className="line-num">05</span>
              <p>&nbsp;&nbsp;builds: [</p>
              <span className="line-num">06</span>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<i>&quot;scalable systems&quot;</i>,
              </p>
              <span className="line-num">07</span>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<i>&quot;human experiences&quot;</i>
              </p>
              <span className="line-num">08</span>
              <p>&nbsp;&nbsp;]</p>
              <span className="line-num">09</span>
              <p>&#125;;</p>
              <div className="code-cursor" />
            </div>
          </div>
        </section>

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
              Desenvolvedor Full Stack motivado a transformar sistemas
              complexos em aplicações escaláveis, de alta performance e
              orientadas a resultados.
            </p>
            <p>
              Meu diferencial está na capacidade de transitar entre o código e a
              regra de negócio: iniciei minha trajetória no suporte técnico, o
              que me deu uma visão privilegiada das dores do usuário final, e
              hoje traduzo essa experiência em arquiteturas robustas.
            </p>
            <div className="about-grid">
              {[
                [
                  "Arquitetura & Modernização",
                  "Liderança técnica na migração de sistemas monolíticos para microsserviços.",
                ],
                [
                  "Eficiência Técnica",
                  "Otimização de consultas SQL, Docker e APIs RESTful seguras.",
                ],
                [
                  "Qualidade de Software",
                  "Clean Code, princípios SOLID e Design Patterns para manutenção.",
                ],
                [
                  "Agilidade",
                  "Experiência prática com metodologias ágeis em ambientes multidisciplinares.",
                ],
              ].map(([t, d]) => (
                <article key={t}>
                  <Check />
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
            {skills.map(([title, desc, Icon]) => (
              <article className="skill-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

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
            <article className="timeline-item current">
              <div className="timeline-marker" />
              <div className="timeline-meta">
                <span>SET 2024 — PRESENTE</span>
                <b>Atual</b>
              </div>
              <div>
                <h3>Analista Programador — Júnior II</h3>
                <h4>
                  Versaurb <span>·</span> Caratinga, MG
                </h4>
                <ul>
                  <li>
                    Desenvolvimento e manutenção de sistemas críticos de
                    regularização fundiária para diversos municípios.
                  </li>
                  <li>
                    Criação de interfaces modernas e APIs robustas com PHP,
                    React/Next.js e MySQL.
                  </li>
                  <li>
                    Containerização com Docker e refatoração de sistemas legados
                    aplicando SOLID e Clean Code.
                  </li>
                </ul>
                <p className="tech-line">
                  LARAVEL · LUMEN · REACT · NEXT.JS · MYSQL · DOCKER
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-meta">
                <span>MAR 2023 — AGO 2024</span>
              </div>
              <div>
                <h3>Auxiliar de Geoinformação</h3>
                <h4>
                  Versaurb <span>·</span> Caratinga, MG
                </h4>
                <ul>
                  <li>
                    Ponte entre usuários finais e desenvolvimento, alinhando
                    soluções às regras de negócio.
                  </li>
                  <li>
                    Suporte técnico especializado e capacitação de usuários no
                    sistema de regularização fundiária.
                  </li>
                  <li>
                    Consultas de dados geoespaciais via SQL e levantamento de
                    requisitos com Scrum e Kanban.
                  </li>
                </ul>
                <p className="tech-line">
                  SQL · SCRUM · KANBAN · SUPORTE TÉCNICO · REQUISITOS
                </p>
              </div>
            </article>
          </div>
        </section>

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
              <p className="card-label">GRADUAÇÃO · EM ANDAMENTO</p>
              <h3>Ciência da Computação</h3>
              <p>Faculdades Doctum</p>
              <span>2023 — 2026</span>
            </article>

            <div className="soft-skills">
              <p className="card-label">COMO EU TRABALHO</p>
              <div>
                {[
                  "Resolução de Problemas",
                  "Trabalho em Equipe",
                  "Raciocínio Lógico",
                  "Comunicação",
                  "Criatividade",
                  "Ética",
                ].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

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
              Uma seleção de projetos que traduzem minha forma de pensar
              produto, código e experiência.
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
                <p>{project.desc}</p>
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
            <ButtonLink href="#contato">Vamos conversar</ButtonLink>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="section-shell contact-inner">
            <div>
              <SectionLabel>06 · Contato</SectionLabel>
              <h2>
                Vamos construir
                <br />
                <em>algo relevante?</em>
              </h2>
              <p>
                Se você tem um desafio, um projeto ou só quer trocar uma ideia,
                estou aberto para conversar.
              </p>
              <ButtonLink href="mailto:pedroazvdo.8@gmail.com">
                Solicitar uma conversa
              </ButtonLink>
            </div>

            <div className="contact-links">
              <a href="mailto:pedroazvdo.8@gmail.com">
                <Mail />
                <span>
                  <small>E-mail</small>
                  pedroazvdo.8@gmail.com
                </span>
                <ArrowUpRight />
              </a>

              <a
                href="https://www.linkedin.com/in/azpedroc/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="rgb(0, 0, 0)"
                    d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                  />
                </svg>
                <span>
                  <small>LinkedIn</small>
                  /in/azpedroc
                </span>
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/pedroazvedoc"
                target="_blank"
                rel="noreferrer"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>
                  <small>GitHub</small>
                  /pedroazvedoc
                </span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#inicio" className="brand">
          <span>PA</span>
          <strong>
            Pedro Azevedo<span>.</span>
          </strong>
        </a>
        <p>Software que faz sentido.</p>
        <div>
          <a
            href="https://www.linkedin.com/in/azpedroc/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pedroazvedoc"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:pedroazvdo.8@gmail.com">E-mail</a>
        </div>
        <small>© 2026 Pedro Azevedo Costa. Todos os direitos reservados.</small>
      </footer>
    </>
  );
}
