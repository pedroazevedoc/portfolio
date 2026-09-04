import type { LucideIcon } from "lucide-react";

export interface Skill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  stack: string;
  url: string;
  action: string;
  live?: boolean;
}

export interface Experience {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  location: string;
  description: string[];
  techLine: string;
}

export interface Education {
  label: string;
  status: string;
  course: string;
  institution: string;
  period: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface ContactLink {
  type: "email" | "linkedin" | "github";
  label: string;
  value: string;
  url: string;
}

export type SectionId =
  | "sobre"
  | "habilidades"
  | "experiencia"
  | "formacao"
  | "projetos"
  | "contato";
