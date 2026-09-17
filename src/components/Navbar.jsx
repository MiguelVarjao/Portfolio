function Navbar() {
  return (
    <header className="navbar">
      <a className="barra-principal" href="#inicio">
        Portfolio
      </a>

      <nav>
        <ul>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#educacao">Educação</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
        </ul>
      </nav>

      <a className="link-contato" href="#contato">
        Contato
      </a>
    </header>
  );
}

export default Navbar;