import Navbar from "./components/Navbar";

const projects = [
  {
    year: "2026",
    title: "Plataforma de curso",
    description:
      "Plataforma corporativa de treinamento e desenvolvimento profissional, desenvolvida para apoiar a capacitação e o crescimento de colaboradores.",
    category: "React",
  },
  {
    year: "2026",
    title: "Gerenciador de tarefas",
    description:
      "Aplicação para organizar tarefas, acompanhar o progresso e praticar desenvolvimento com React.",
    category: "React",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="inicio" className="conteudo">
          <div className="empty-box" />

          <div className="conteudo-destaque">
            <p className="eyebrow">DESENVOLVEDOR · BRASIL</p>
            <h1>
              Desenvolvedor, Brasil.{" "}
              <span>Construindo experiências digitais e soluções com tecnologia.</span>
            </h1>
          </div>
        </section>

        <section id="sobre" className="intro section-shell">
          <div className="intro-label">
            <span>SOBRE MIM</span>
          </div>

          <div className="intro-text">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e venho
              construindo projetos para transformar o que estudo em experiências
              reais.
            </p>
            <p>
              Tenho interesse em desenvolvimento web, interfaces e diferentes
              tecnologias de TI. Gosto de aprender na prática, entender como as
              coisas funcionam e evoluir um projeto do início ao fim.
            </p>
          </div>
        </section>

        <section id="projetos" className="work section-shell">
          
          <div className="project">
          
            <span className="small-label">Projetos pessoais</span>
            
            {projects.map((project) => (
              <article key={project.title}>
                <div className="project-info">
                  <span className="project-year">{project.year}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-image">
                </div>

              </article>
            ))}
          </div>
        </section>

        <section  id="tecnologias"className="selected section-shell">
          <div className="selected-title">
            <span className="small-label">tecnologias</span>
            <h2>Tecnologias que sei</h2>
          </div>

          <div className="selected-grid">
            <div>
              <span>01</span>
              <h3>Interfaces web</h3>
              <p>
                Projetos em React com foco em estrutura, componentes e CSS
                responsivo.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Sistemas em Java</h3>
              <p>
                Aplicações para praticar orientação a objetos, coleções e
                organização de código.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Estudos de TI</h3>
              <p>
                Redes, banco de dados, desenvolvimento e outras áreas que fazem
                parte da minha formação.
              </p>
            </div>
          </div>
        </section>

        <section id="educacao" className="education section-shell">
          <div>
            <span className="small-label">EDUCAÇÃO</span>
            <h2>Aprendizado contínuo.</h2>
          </div>

          <div className="education-content">
            <div className="education-row">
              <span>2025 — 2027</span>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span>USCS</span>
            </div>
          </div>
        </section>

        <section id="contato" className="contact section-shell">
          <div className="contact-copy">
            <span className="small-label">CONTATO</span>
            <h2>Vamos conversar.</h2>
          </div>

          <div className="contact-links">
            <a href="mailto:miguelvarjao01@gmail.com">E-mail ↗</a>
            <a href="https://github.com/MiguelVarjao" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/miguelvarjao/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Miguel Varjão</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}

export default App;