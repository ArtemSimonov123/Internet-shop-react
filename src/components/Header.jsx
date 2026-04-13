function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">Internet-shop</h1>

        <nav className="nav">
          <a href="#" className="nav-link">Головна</a>
          <a href="#catalog" className="nav-link">Каталог</a>
          <a href="#" className="nav-link">Про проєкт</a>
        </nav>
      </div>
    </header>
  )
}

export default Header