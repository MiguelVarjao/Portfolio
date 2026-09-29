import Navbar from "./components/Navbar";
import gerenciador_tarefas from "./assets/gerenciador_tarefas.png";
import etp from "./assets/Dashboard.png"

const projects = [
  {
    year: "2026",
    title: "Plataforma de cursos",
    description:
      "Plataforma corporativa de treinamento e desenvolvimento profissional, desenvolvida para apoiar a capacitação e o crescimento de colaboradores.",
    category: "React",
    image:etp,
  },
  {
    year: "2026",
    title: "Gerenciador de tarefas",
    description:
      "Aplicação para organizar tarefas, acompanhar o progresso e praticar desenvolvimento com React.",
    category: "React",
    image:gerenciador_tarefas,
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
            <p className="eyebrow">DESENVOLVEDOR </p>
            <h1>
              Desenvolvedor.{" "}
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
                  
                <div classname="project-image"><img src={project.image} alt="Gerenciador de tarefas" /></div>
                
              </article>
            ))}
          </div>
        </section>

        <section id="tecnologias" className="selected section-shell">
          <div className="skills-header">
            <span className="small-label">— TECNOLOGIAS</span>

            <h2>Habilidades</h2>

            <p>
              Tecnologias que utilizo para desenvolver, integrar e publicar aplicações.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
              </div>
              <span>HTML5</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                />
              </div>
              <span>CSS3</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
              </div>
              <span>JavaScript</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
              </div>
              <span>React</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                />
              </div>
              <span>Java</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
              </div>
              <span>MySQL</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
              </div>
              <span>Git / GitHub</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                />
              </div>
              <span>Docker</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
                  alt="Vite"
                />
              </div>
              <span>Vite</span>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  alt="Linux"
                />
              </div>
              <span>Linux</span>
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