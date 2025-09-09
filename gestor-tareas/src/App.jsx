import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (confirm('¿Seguro que deseas eliminar esta tarea?')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Todo List con React</h1>
      <TodoForm addTodo={addTodo} />
      <div className="my-3">
        <p>Total: {total} | Pendientes: {pending} | Completadas: {completed}</p>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
