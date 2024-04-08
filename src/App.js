import React, { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import AddTask from "./AddTask";
import DropdownMenu from "./DropdownMenu";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const handleAddTask = (newTask) => {
    const newTaskList = [
      ...tasks,
      { id: Date.now(), description: newTask, completed: false },
    ];
    setTasks(newTaskList);
  };

  const handleEditTask = (id, updatedTask, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, description: updatedTask, completed: isCompleted }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  // Calculate the percentage of completed tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentageCompleted =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="container">
      <Header />
      <Title />
      <AddTask addTask={handleAddTask} />
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>Show All</button>
        <button onClick={() => handleFilterChange("completed")}>
          Show Completed
        </button>
        <button onClick={() => handleFilterChange("active")}>
          Show Active
        </button>
      </div>
      <DropdownMenu onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        filterOption={filterOption}
      />
      <h4>Percentage of Completed Tasks: {percentageCompleted.toFixed(2)}%</h4>
    </div>
  );
}

export default App;
