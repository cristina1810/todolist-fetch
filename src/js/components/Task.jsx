import Delete from "./Delete";

const Task = ({ item, eliminar }) => {
  console.log(item);
  return (
    <div className="task-style  m-3 p-2 d-flex justify-content-between align-items-center">
      <p className="text-center prueba m-2 ">{item.label}</p>
      <Delete id={item.id} eliminar={eliminar} />
    </div>
  );
};

export default Task;
