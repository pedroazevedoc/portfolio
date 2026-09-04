import {
  Code2,
  Layers3,
  Database,
  Cloud,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import type {
  Skill,
  Project,
  Experience,
  Education,
  AboutHighlight,
  ContactLink,
  SectionId,
} from "@/types";

export const SECTION_IDS: SectionId[] = [
  "sobre",
  "habilidades",
  "experiencia",
  "formacao",
  "projetos",
  "contato",
];

export const skills: Skill[] = [
  {
    title: "Backend & APIs",
    description: "PHP (Laravel e Lumen), Node.js (NestJS e Express.js)",
    icon: Code2,
  },
  {
    title: "Frontend & Mobile",
    description:
      "JavaScript & TypeScript (React, Next.js), Vue.js, React Native e Blade",
    icon: Layers3,
  },
  {
    title: "Bancos de Dados & Cache",
    description: "PostgreSQL, MySQL, MongoDB e Redis",
    icon: Database,
  },
  {
    title: "DevOps & Cloud",
    description: "AWS Cloud, Docker, CI/CD (GitHub Actions), Git, RabbitMQ",
    icon: Cloud,
  },
  {
    title: "Arquitetura & Design",
    description:
      "Clean Architecture, Monolito Modular, Microsserviços, REST",
    icon: Boxes,
  },
  {
    title: "Qualidade & Gestão",
    description: "PHPUnit, Cypress.js, Scrum & Jira",
    icon: ShieldCheck,
  },
];

export const projects: Project[] = [
  {
    title: "Gerador de Listas",
    type: "Projeto publicado",
    description:
      "Plataforma para criação e personalização de listas dinâmicas em PDF, com edição em tempo real e motor de estilização customizável.",
    stack: "TypeScript · React · Next.js · react-pdf · Tailwind",
    url: "https://geradorlistas.vercel.app",
    action: "Visitar projeto",
    live: true,
  },
  {
    title: "Conteúdos API",
    type: "Projeto público",
    description:
      "API RESTful completa para gerenciamento de conteúdos como posts, vídeos e comentários, desenvolvida com foco em segurança e escalabilidade.",
    stack: "PHP · Laravel · MySQL · Docker · Sanctum · Scramble",
    url: "https://github.com/pedroazevedoc/api-conteudos",
    action: "Ver repositório",
  },
  {
    title: "Gestão de saúde",
    type: "Projeto público",
    description:
      "Sistema web responsivo para gerenciamento de endereços e pacientes, com API em Laravel e interface Vue.js integrada à ViaCep.",
    stack: "PHP · Laravel · MySQL · Vue.js · Docker",
    url: "https://github.com/pedroazevedoc/health-management",
    action: "Ver repositório",
  },
  {
    title: "Biblioteca Rápida",
    type: "Projeto público",
    description:
      "Aplicação para consulta e curadoria de livros integrada à OpenLibrary API, com buscas globais e gerenciamento de favoritos.",
    stack: "JavaScript · React · Vite · React Router DOM · OpenLibrary",
    url: "https://github.com/pedroazevedoc/fast-library",
    action: "Ver repositório",
  },
];

export const experiences: Experience[] = [
  {
    period: "SET 2024 — PRESENTE",
    current: true,
    role: "Analista Programador — Júnior II",
    company: "Versaurb",
    location: "Caratinga, MG",
    description: [
      "Desenvolvimento e manutenção de sistemas críticos de regularização fundiária para diversos municípios.",
      "Criação de interfaces modernas e APIs robustas com PHP, React/Next.js e MySQL.",
      "Containerização com Docker e refatoração de sistemas legados aplicando SOLID e Clean Code.",
    ],
    techLine: "LARAVEL · LUMEN · REACT · NEXT.JS · MYSQL · DOCKER",
  },
  {
    period: "MAR 2023 — AGO 2024",
    role: "Auxiliar de Geoinformação",
    company: "Versaurb",
    location: "Caratinga, MG",
    description: [
      "Ponte entre usuários finais e desenvolvimento, alinhando soluções às regras de negócio.",
      "Suporte técnico especializado e capacitação de usuários no sistema de regularização fundiária.",
      "Consultas de dados geoespaciais via SQL e levantamento de requisitos com Scrum e Kanban.",
    ],
    techLine: "SQL · SCRUM · KANBAN · SUPORTE TÉCNICO · REQUISITOS",
  },
];

export const education: Education = {
  label: "GRADUAÇÃO",
  status: "EM ANDAMENTO",
  course: "Ciência da Computação",
  institution: "Faculdades Doctum",
  period: "2023 — 2026",
};

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Arquitetura & Modernização",
    description:
      "Liderança técnica na migração de sistemas monolíticos para microsserviços.",
  },
  {
    title: "Eficiência Técnica",
    description:
      "Otimização de consultas SQL, Docker e APIs RESTful seguras.",
  },
  {
    title: "Qualidade de Software",
    description:
      "Clean Code, princípios SOLID e Design Patterns para manutenção.",
  },
  {
    title: "Agilidade",
    description:
      "Experiência prática com metodologias ágeis em ambientes multidisciplinares.",
  },
];

export const softSkills = [
  "Resolução de Problemas",
  "Trabalho em Equipe",
  "Raciocínio Lógico",
  "Comunicação",
  "Criatividade",
  "Ética",
];

export const contactLinks: ContactLink[] = [
  {
    type: "email",
    label: "E-mail",
    value: "pedroazvdo.8@gmail.com",
    url: "mailto:pedroazvdo.8@gmail.com",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "/in/azpedroc",
    url: "https://www.linkedin.com/in/azpedroc/",
  },
  {
    type: "github",
    label: "GitHub",
    value: "/pedroazvedoc",
    url: "https://github.com/pedroazvedoc",
  },
];

export const sectionLabels: Record<SectionId, string> = {
  sobre: "01 · Sobre",
  habilidades: "02 · Habilidades",
  experiencia: "03 · Experiência",
  formacao: "04 · Formação",
  projetos: "05 · Projetos",
  contato: "06 · Contato",
};
