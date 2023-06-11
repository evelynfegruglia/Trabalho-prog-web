import React from 'react';
import { Link } from 'react-router-dom';
import "./stylet3.css"

const Tela3 = () =>{
    return (
      <body>
      <div className = "container">
        <div className="cadastro">
          <div className="titulo">
            <h1 className = "tituloCadastro">OLÁ, GOSTARIA</h1>
            <h1 className = "tituloCadastro">UMA TAREFA</h1>
            <h1 className = "tituloCadastro">PENDENTE?</h1>
          </div>
        </div>
        <div className="formulario">
          <div className="coluna1"></div>
          <div className="coluna3">
            <input type="text" id="tarefa" />
            <button>Enviar</button>
          </div>
        </div>
      </div>
        
        </body>
);
}

export default Tela3;