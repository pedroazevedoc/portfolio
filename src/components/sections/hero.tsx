import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker">DESENVOLVEDOR FULL STACK</p>
        <h1>
          Transformo ideias em experiências digitais{" "}
          <em>que geram resultados.</em>
        </h1>
        <p className="hero-text">
          Desenvolvedor focado em construir soluções que unem excelência técnica
          e valor real de negócio.
        </p>

        <div className="hero-actions">
          <Button href="#contato">Solicitar orçamento</Button>
          <Button href="#projetos" secondary>
            Ver projetos <span className="arrow-down">↓</span>
          </Button>
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
            &nbsp;&nbsp;role: <i>&quot;Full Stack Developer&quot;</i>,
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
  );
}
