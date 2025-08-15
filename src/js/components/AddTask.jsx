import { postData } from "../../../api/getDataAPI";
import React from "react";
const AddTask = ({ addNewTask, eliminarTarea }) => {
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = async (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      const task = { label: newTask, done: false };
      try {
        const response = await postData(task);
        console.log("Task added:", response);
        addNewTask(response);
        setNewTask(""); // Clear input after adding
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  return (
    <>
      <input
        type="text"
        className="form-control input-style "
        placeholder="Añade una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleAddTask}
      />
      <button className="btn delete-all m-2" onClick={() => eliminarTarea()}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </>
  );
};

export default AddTask;
