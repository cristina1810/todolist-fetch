import React from "react";
import Task from "./Task";
import { deleteData } from "../../../api/getDataAPI";
const TaskList = ({ tasks, eliminar }) => {
  const changeTask = () => {
    // Función para pasar el estado a AddTask
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="mt-5">Añade una nueva tarea.</p>
      ) : (
        tasks.map((item) => (
          <Task key={item.id} item={item} eliminar={eliminar} />
        ))
      )}
    </div>
  );
};

export default TaskList;
