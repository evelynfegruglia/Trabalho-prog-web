import { db } from "../firebaseConnection";
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

const createTask = async ( tarefa ) => {
    return await addDoc(collection(db, "todo"), {
        tarefa: tarefa,
        concluida: false
    });
}

const getTaskList = async () => {
    return await getDocs(collection(db, "todo"))
}

const updateTaskConcluido = async (id, concluido) => {
    console.log("update task concluido", id, concluido)
    return await updateDoc(doc(db, "todo", id), {
        concluido: concluido
    })
}

const updateTaskNome = async (id, nome) => {
    console.log("update task nome", id, nome)
    return await updateDoc(doc(db, "todo", id), {
        tarefa: nome
    })
}

const deleteTask = async (id) => {
    return await deleteDoc(doc(db, "todo", id))
}

export {
    createTask,
    getTaskList,
    updateTaskConcluido,
    deleteTask,
    updateTaskNome,
}