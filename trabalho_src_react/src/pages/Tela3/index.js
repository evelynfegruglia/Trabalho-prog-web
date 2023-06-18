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
          setTarefa("")
        })
        .catch(() => {
          alert("Falha ao cadastrar.")
        })
    }

    return (
      <div className = "container" style={{backgroundColor: "#b2b6f4"}}>
        <div className="cadastro">
          <div className="titulo">
            <h1 className="tituloCadastro" style={{ width: "600px" }}>OLÁ, GOSTARIA DE ADICIONAR UMA TAREFA PENDENTE?</h1>
          </div>
        </div>
        <div className="formulario">
          <div className="coluna1"></div>
          <div className="coluna3">
            <input type="text" value={tarefa} onChange={(event) => setTarefa(event.target.value)}/>
            <button className="botao-cadastrar-tarefa" onClick={submitTask}>+</button>
          </div>
        </div>
          
      <div class="footer">
          <Link to="/lista"><button class="button">Ver lista de tarefas</button></Link>
      </div>
      </div>
  );
}

export default Tela3;