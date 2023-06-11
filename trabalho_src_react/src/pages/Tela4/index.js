import React from 'react';
import { Link } from 'react-router-dom';
import "./stylet4.css"



const Tela4 = () =>{
    return (
<body>
    <div class="content">
        <p>LISTA DE <br/> TAREFA </p>
    </div>
  
    <div class="checkbox-container">
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        <label class="checkbox">
            <input type="checkbox"/>
            <div class="line"></div>
        </label>
        
    </div>

    <div class="footer">
        <button class="button">Concluir</button>
        <button class="button">Editar</button>
        <button class="button">Deletar</button>
    </div>
</body>        
);
}

export default Tela4;