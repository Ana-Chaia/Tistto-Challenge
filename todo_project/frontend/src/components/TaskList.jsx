import React from 'react';

const TaskList = ({ todos, delTodo, editTodo, completeTodo, toggle, update_todo, todoId, task, setTask, taskRef, setToggle }) => {
  return (
    <div className="task-list">
      {todos.map(todo => (
        <div key={todo.id} className="task-item">
          <p>{todo.text}</p>
          <button onClick={() => completeTodo(todo.id)}>Complete</button>
          <button onClick={() => editTodo(todo.id)}>Edit</button>
          <button onClick={() => delTodo(todo.id)}>Delete</button>
        </div>
      ))}
      
      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <h1>Update Form</h1>
            <form action="" onSubmit={(e) => { update_todo(e, todoId, task); setToggle(false); }}>
              <input type="text" ref={taskRef} placeholder="Update Todo" value={task} onChange={(e) => setTask(e.target.value)} required />
              <button id="add">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;