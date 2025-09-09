import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p className="text-center text-muted">No hay tareas todavía</p>;
  }

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
