import React, { useState, useEffect } from "react";
const Task = ({ task, onEdit, onDelete }) => {
  const [isDone, setIsDone] = useState(false);
  const [doneTask, setDoneTask] = useState(task.description);

  useEffect(() => {
    setDoneTask(task.description);
  }, [task.description]);

  const handleDone = () => {
    if (doneTask.trim()) {
      onEdit(task.id, doneTask, task.completed);
      setIsDone(false);
    }
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleToggleComplete = () => {
    onEdit(task.id, doneTask, !task.completed); // Toggle completion status
    setIsDone(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleDone();
    } else if (e.key === "Escape") {
      setIsDone(false);
    }
  };

  // Define the handleEdit function
  const handleEdit = () => {
    setIsDone(true); // Set isDone to true to enable editing mode
  };

  return (
    <div className="taskListContainer">
      <li className={`task-item ${task.completed ? "completed" : ""}`}>
        {isDone ? (
          <>
            <input
              type="text"
              value={doneTask}
              onChange={(e) => setDoneTask(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <p className="edit-prompt">Press Enter to save, Esc to cancel</p>
          </>
        ) : (
          <span className="task-description" onClick={() => setIsDone(true)}>
            {task.description}
            <button onClick={handleEdit}>Edit</button>
          </span>
        )}

        <button
          onClick={isDone ? handleDone : handleToggleComplete}
          className="done-button"
        >
          {isDone ? "Save" : "Done"}
        </button>

        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Task;
