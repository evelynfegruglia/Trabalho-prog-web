import React from 'react';
import { Link } from 'react-router-dom';
import "./stylet4.css"
import TodoList from '../../components/TodoList';



const Tela4 = () =>{
    return (
    <>
    <div class="content">
        <p>LISTA DE <br/> TAREFAS </p>
    </div>
  
    <TodoList />

    <div class="footer">
        <Link to="/cadastro"><button class="button">Cadastrar nova tarefa</button></Link>
        <Link to="/"><button class="button">Inicio</button></Link>
    </div>

    </>
);
}

export default Tela4;