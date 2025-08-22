const base_url = "https://playground.4geeks.com/todo";
const user = "Cris";

// Leer datos del usuario
const getData = async (user) => {
  const response = await fetch(`${base_url}/users/${user}`);

  // Si la respuesta no es 200 (ok), lanzamos un error
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.todos;
};

//Añadir tareas
const postData = async (task) => {
  const response = await fetch(`${base_url}/todos/${user}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

// Eliminar tareas
const deleteData = async (taskID) => {
  const response = await fetch(`${base_url}/todos/${taskID}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.status;
};

const postUser = async () => {
  const response = await fetch(`${base_url}/users/${user}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: user }),
  });
  const data = await response.json();
  return data;
};
const deleteUser = async () => {
  const response = await fetch(`${base_url}/users/${user}`, {
    method: "DELETE",
  });
  return response.status;
};

export { base_url, user, getData, postData, deleteData, postUser, deleteUser };
