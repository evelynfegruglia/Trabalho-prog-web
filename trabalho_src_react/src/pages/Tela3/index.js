import React from 'react';
import { Link } from 'react-router-dom';
import "./stylet3.css"
import { useState } from "react";
import { createTask } from "../../services/firebase";

const Tela3 = () =>{

    const [tarefa, setTarefa] = useState("");

    const submitTask = async() => {
      await createTask(tarefa)
        .then(() => {
          alert("Tarefa cadastrada!")
        })
        .catch(() => {
          alert("Falha ao cadastrar.")
        })
    }

    return (
      <div className = "container">
        <div className="cadastro">
          <div className="titulo">
            <h1 className="tituloCadastro" style={{ width: "400px" }}>OLÁ, GOSTARIA DE INSERIR UMA TAREFA PENDENTE?</h1>
          </div>
        </div>
        <div className="formulario">
          <div className="coluna1"></div>
          <div className="coluna3">
            <input type="text" value={tarefa} onChange={(event) => setTarefa(event.target.value)}/>
            <button onClick={submitTask}>Enviar</button>
          </div>
        </div>
          
      <div class="footer">
          <Link to="/lista"><button class="button">Lista</button></Link>
      </div>
      </div>
  );
}

export default Tela3;