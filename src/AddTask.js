import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(1); // Initial priority set to 1

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTaskDescription = `${priority}: ${task}`; // Concatenate priority with task description
      addTask(newTaskDescription); // Pass the concatenated task description
      setTask(""); // Reset task input
    }
  };

  const handlePriorityChange = (e) => {
    setPriority(parseInt(e.target.value)); // Parse selected value to integer
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={priority} onChange={handlePriorityChange}>
        {/* Generate options from 1 to 100 */}
        {Array.from({ length: 100 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
