"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
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
        {SECTION_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={closeMenu}
            className={activeSection === id ? "active" : ""}
          >
            {id === "formacao" ? "Formação" : id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#contato" className="nav-cta" onClick={closeMenu}>
          Falar comigo <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}
