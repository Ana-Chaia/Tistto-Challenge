import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TbEdit } from 'react-icons/tb'

const TaskList = ({ todos, delTodo, complete_todo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div className="todo-list-item" key={index}>
          <div className="task">
            <input type="checkbox" onChange={(e) => complete_todo(e, todo.id, todo)} />
            <p id="t_task" className={todo.status === "Completed" ? "strike" : ""}>{todo.task}</p>
          </div>
          <div className="btn-container">
            <div className="edit">
              <TbEdit size={25} />
            </div>
            <div className="del">
              <AiFillDelete size={25} onClick={() => delTodo(todo.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList