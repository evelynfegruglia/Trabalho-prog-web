import React, { useEffect, useState } from "react"
import { deleteTask, getTaskList, updateTaskConcluido, updateTaskNome } from "../services/firebase"


const TodoList = () => {
    
    const [ tasks, setTasks ] = useState([])

    const loadList = async () => {
        const snapshot = await getTaskList()

        console.log("Load list", snapshot)

        const items = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        });

        console.log("items", items)

        setTasks(items)
    }

    const onChangeTask = async (event, task) => {
        const concluido = event.target.checked

        await updateTaskConcluido(task.id, concluido)
        await loadList()
    }

    const onDeleteTask = async (event, task) => {
        event.preventDefault()

        const confirma = window.confirm("Confirma excluir esta tarefa?")
        if (confirma) {
            await deleteTask(task.id)
            await loadList()
        }
    }

    const onEditTask = async (event, task) => { 
        event.preventDefault()

        const titulotarefa = await window.prompt("Alterar nome da tarefa para: ", task.tarefa);

        await updateTaskNome(task.id, titulotarefa)
        await loadList()
    }

    useEffect(() => {
        loadList()
    }, [])

    return (
     <div className="checkbox-container">
        {tasks.map((task) => (
            <label className="checkbox" key={task.id}>
                <input type="checkbox"
                    checked={task.concluido}
                    onChange={(event) => onChangeTask(event, task)} />
                <div className="titulo-tarefa">{task.tarefa}</div>
                <button class="botao-excluir" onClick={(event) => onDeleteTask(event, task)}>X</button>
                <button class="botao-editar" onClick={(event) => onEditTask(event, task)}>Editar</button>
            </label>
        ))}
    </div>
    );
}

export default TodoList;