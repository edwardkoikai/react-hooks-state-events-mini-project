import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {
  
  const deleteTask = (id) => {
    const updatedTask = tasks.filter(task => task.id !== id);
    setTasks(updatedTask);
  }

  const taskItems = tasks.map((task) => (
    <Task key={task.id} text={task.text} category={task.category} id={task.id} deleteTask={deleteTask} />
  ));

  return <div className="tasks">{taskItems}</div>;
}

export default TaskList;
