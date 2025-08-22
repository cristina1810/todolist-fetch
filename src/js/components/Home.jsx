import React from "react";
import ReactDOM from "react-dom/client";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Delete from "./Delete";
import {
  getData,
  deleteData,
  deleteUser,
  postUser,
} from "../../../api/getDataAPI";
import { useState, useEffect } from "react";
//create your first component
const Home = () => {
  const user = "Cris";
  const [tasks, setTasks] = useState([]);
  //Llamada a la API para obtener las tareas
  const fetchTasks = async () => {
    try {
      const data = await getData(user);
      setTasks(data);
    } catch (error) {
      // Si la llamada falla, intentamos crear el usuario
      console.error("Error al obtener las tareas. Creando usuario...");
      try {
        await postUser(user);
        // Volvemos a llamar a getData después de crear el usuario
        const data = await getData(user);
        setTasks(data);
      } catch (postError) {
        console.error("Error al crear el usuario:", postError);
      }
    }
  };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  //eliminar tarea
  const deleteTask = async (taskId) => {
    const del = await deleteData(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const deleteAllTasks = async () => {
    const removeAll = await deleteUser();
    const createNew = await postUser();
    console.log(createNew);
    setTasks([]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div className="text-center">
        <p className="titulo">To do list</p>

        <div className="d-flex justify-content-center align-items-center top m-auto">
          <AddTask addNewTask={addNewTask} eliminarTarea={deleteAllTasks} />
        </div>
        <TaskList tasks={tasks} eliminar={deleteTask} />
      </div>
    </>
  );
};

export default Home;
