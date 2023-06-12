import React from 'react';
import { Link } from 'react-router-dom';
import "./stylet3.css"
import { db } from "C:/Users/janai/Documents/trabalho_web/src/firebaseConnection.js";
import { useState } from "react";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const Tela3 = () =>{

    const[tarefa,setTarefa] = useState("");

    async function createTask(){
      
      await addDoc(collection(db, "todo"), {
        tarefa: tarefa,
        concluida:false
      })
        .then(() => {
          console.log("Dados registrados no banco");
          setTarefa("");
        })
        .catch((error) => {
          console.log("Gerou um erro ao adicionar" + error);
        });
    }

    return (
      <body>
      <div className = "container">
        <div className="cadastro">
          <div className="titulo">
            <h1 className = "tituloCadastro">OLÁ, GOSTARIA</h1>
            <h1 className = "tituloCadastro">DE INSERIR</h1>
            <h1 className = "tituloCadastro">UMA TAREFA</h1>
            <h1 className = "tituloCadastro">PENDENTE?</h1>
          </div>
        </div>
        <div className="formulario">
          <div className="coluna1"></div>
          <div className="coluna3">
            <input type="text" value={tarefa} onChange={(event) => setTarefa(event.target.value)}/>
            <button onClick={createTask}>Enviar</button>
          </div>
        </div>
      </div>
        
        </body>
);
}

export default Tela3;