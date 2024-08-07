import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const TaskForm = ({ addTodo, updateTodo, currentTodo }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
	if (currentTodo) {
	  setIsEditing(true);
	  setValue("task", currentTodo.task);
	} else {
	  setIsEditing(false);
	  reset();
	}
  }, [currentTodo, setValue, reset]);

  const onSubmit = (data) => {
	if (isEditing) {
	  updateTodo(currentTodo.id, data);
	} else {
	  addTodo(data);
	}
	reset();
	setIsEditing(false);
  };

  return (
	<div className="task-form">
	  <form onSubmit={handleSubmit(onSubmit)}>
		<input
		  type="text"
		  id="task"
		  placeholder="Enter Todo"
		  {...register("task", { required: true })}
		/>
		<button type="submit">{isEditing ? "Update" : "Add"}</button>
	  </form>
	  {errors.task?.type === "required" && <small>This field is required</small>}
	</div>
  );
}

export default TaskForm;