function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#inicio">
        portfolio
      </a>

      <nav aria-label="Navegação principal">
        <ul>
          <li><a href="#trabalho">Trabalho</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#educacao">Educação</a></li>
        </ul>
      </nav>

      <a className="contact-link" href="#contato">
        Contato
      </a>
    </header>
  );
}

export default Navbar;