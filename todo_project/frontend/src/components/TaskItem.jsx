import { useState, useEffect } from "react";
import axios from 'axios';
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem"; // Importando TaskItem

function App() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/todos')
      .then(res => setTodos(res.data))
      .catch(err => setErrors(err.message));
  }, []);

  // add todo function
  const addTodo = (data) => {
    const originalTodos = [...todos];
    setTodos([...todos, data = { ...data, id: parseInt(todos[todos.length - 1]?.id || 0) + 1, status: "Active" }]);
    axios.post("http://localhost:8000/todos", data)
      .then(res => setTodos([...todos, res.data]))
      .catch(err => {
        setErrors(err.message);
        setTodos(originalTodos);
      });
  };

  // delete function
  const delTodo = (id) => {
    const originalTodos = [...todos];
    setTodos(todos.filter(todo => todo.id !== id));
    axios.delete("http://localhost:8000/todos/" + id)
      .catch(err => {
        setErrors(err.message);
        setTodos(originalTodos);
      });
  };

  // update function
  const updateTodo = (id, data) => {
    const originalTodos = [...todos];
    const updatedTodo = { ...data, id, status: "Active" };
    setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    axios.patch("http://localhost:8000/todos/" + id, updatedTodo)
      .catch(err => {
        setErrors(err.message);
        setTodos(originalTodos);
      });
  };

  const completeTodo = (e, id, todo) => {
    const updatedTodo = { ...todo, completed: e.target.checked };
    setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    axios.patch("http://localhost:8000/todos/" + id, updatedTodo)
      .catch(err => setErrors(err.message));
  };

  const filterTodo = (cat_value) => {
    setTodos(todos.filter(todo => todo.status === cat_value));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setCurrentTodo(todoToEdit);
  };

  return (
    <div className="todo-container">
      {errors && <p>{errors}</p>}
      <TaskForm addTodo={addTodo} updateTodo={updateTodo} currentTodo={currentTodo} />
      <div className="task-list">
        {todos.map(todo => (
          <TaskItem key={todo.id} todo={todo} delTodo={delTodo} editTodo={editTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;