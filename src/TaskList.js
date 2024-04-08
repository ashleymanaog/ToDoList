import React from "react";
import Task from "./Task";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = ({ tasks, onEdit, onDelete, filterOption }) => {
  // Sort tasks alphabetically by description
  const sortedTasks = [...tasks].sort((a, b) =>
    a.description.localeCompare(b.description)
  );

  const filteredTasks = sortedTasks.filter((task) => {
    if (filterOption === "all") {
      return true; // Show all tasks
    } else if (filterOption === "completed") {
      return task.completed; // Show only completed tasks
    } else if (filterOption === "active") {
      return !task.completed; // Show only active tasks
    }
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
