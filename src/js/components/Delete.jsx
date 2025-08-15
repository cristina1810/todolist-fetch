const Delete = ({ id, eliminar }) => {
  return (
    <button className="btn delete-btn" onClick={() => eliminar(id)}>
      <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default Delete;
