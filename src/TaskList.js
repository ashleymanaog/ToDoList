import React, { useState } from "react";
import Task from "./Task";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = ({ tasks, onEdit, onDelete, filterOption }) => {
  // State to manage the sort order
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending
  // State to manage the sort criteria
  const [sortCriteria, setSortCriteria] = useState("description"); // Default to sorting by description

  // Function to toggle the sort order
  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  // Function to toggle the sort criteria
  const toggleSortCriteria = () => {
    setSortCriteria((prevCriteria) =>
      prevCriteria === "description" ? "priority" : "description",
    );
  };

  // Sort tasks based on the selected criteria and order
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortCriteria === "description") {
      return sortOrder === "asc"
        ? a.description.localeCompare(b.description)
        : b.description.localeCompare(a.description);
    } else {
      // Sort by priority
      return sortOrder === "asc"
        ? a.priority - b.priority
        : b.priority - a.priority;
    }
  });

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
    <div>
      <div className="column">
        {/* CURRENTLY SORT BY: {sortOrder} */}
        <button onClick={toggleSortOrder}>
          Change sort by {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="column">
        {/* CURRENTLY SORT BY: {sortCriteria} */}
        <button onClick={toggleSortCriteria}>
          Change sort by{" "}
          {sortCriteria === "description" ? "Priority" : "Description"}
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
