import PropTypes from 'prop-types';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'black'
        }}>
          {todo.text}
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Eliminar
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
