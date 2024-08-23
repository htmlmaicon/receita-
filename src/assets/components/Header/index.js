import React from 'react';
import './stylle.css'; 

function Header() {
  return (
    <header className="header">
      <img src="assets/imagens/logo.jpeg" alt="Logo" className="header-logo" />
      <h1 className="logo">Minha Aplicação</h1>
      
      <input 
        type="text" 
        placeholder="Pesquisar..." 
        className="search-input"
      />

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/formulario" className="nav-link">ADICIONAR RECEITA</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
