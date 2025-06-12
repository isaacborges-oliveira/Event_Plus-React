import React from 'react';
import './NotFoud.css';  // Importa o CSS

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Página não encontrada</p>
      <a href="/" className="notfound-link">Voltar para a página inicial</a>
    </div>
  );
};

export default NotFound;
