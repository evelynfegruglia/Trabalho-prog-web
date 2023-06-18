import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import img1 from './Elementos/estrela.png'
import img2 from './Elementos/geometrico.png'

const Tela1 = () =>{
  return (
  <div className = "container">
    <div className="home">
      <div className="logo">
        <p className="nome"><i className="fa-solid fa-circle-half-stroke"></i>JVE</p>
        <h1 className = "logoEscrita">TO DO.</h1>
      </div>
    </div>
    <div className="segundapagina">
      <div className = "bordinha">
        <h1 className="cabecalho_segundapagina">GERENCIE <br />SUAS TAREFAS</h1>
        <div className="quadrados">
          <div className="listarTarefas">
            <img src={img1}/>
            <Link to="/lista"><p className="opcoes">Listar Tarefas</p></Link> 
          </div>
          <div className="cadastrarTarefas">
            <img src={img2}/>
            <Link to="/cadastro"><p className="opcoes">Cadastrar Tarefas</p></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Tela1;