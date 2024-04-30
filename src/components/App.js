import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  // Remove "All" category if it's already present in CATEGORIES
  const categories = CATEGORIES.includes("All") 
    ? CATEGORIES.filter(category => category !== "All") 
    : CATEGORIES;

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={[...categories, "All"]} 
        onCategorySelect={handleCategorySelect} 
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
