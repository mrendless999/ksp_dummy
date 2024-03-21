// TaskManagementApp.js

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique IDs
import './TaskManagementApp.css'; // Import CSS for styling

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskDetails) => {
    setTasks([...tasks, { ...taskDetails, id: uuidv4() }]);
  };

  // Function to assign a task to an officer
  const assignTask = (taskId, officerId) => {
    const taskToAssign = tasks.find(task => task.id === taskId);
    taskToAssign.assignedTo = officerId;
    setAssignedTasks([...assignedTasks, taskToAssign]);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskDetails = {
      title: e.target.title.value,
      description: e.target.description.value,
      priority: e.target.priority.value,
      assignedTo: null,
    };
    addTask(taskDetails);
    e.target.reset();
  };

  return (
    <div className="task-management-app-container">
      <h1 className="task-management-app-title">Task Management System</h1>

      {/* Form to add a new task */}
      <form className="task-management-app-form" onSubmit={handleSubmit}>
        <label className="task-management-app-label" htmlFor="title">Task Title:</label>
        <input className="task-management-app-input" type="text" id="title" name="title" required /><br />
        <label className="task-management-app-label" htmlFor="description">Task Description:</label>
        <textarea className="task-management-app-textarea" id="description" name="description" required /><br />
        <label className="task-management-app-label" htmlFor="priority">Priority:</label>
        <select className="task-management-app-select" id="priority" name="priority" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select><br />
        <button className="task-management-app-button" type="submit">Add Task</button>
      </form>

      {/* Display list of tasks */}
      <div className="task-management-app-tasks-section">
        <h2>Available Tasks:</h2>
        <ul className="task-management-app-ul">
          {tasks.map(task => (
            <li className="task-management-app-li" key={task.id}>
              <strong className="task-management-app-strong">{task.title}</strong> - {task.description} - Priority: {task.priority}
              <button className="task-management-app-assign-button" onClick={() => assignTask(task.id, 'officer123')}>Assign Task</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display assigned tasks */}
      <div className="task-management-app-tasks-section">
        <h2>Assigned Tasks:</h2>
        <ul className="task-management-app-ul">
          {assignedTasks.map(task => (
            <li className="task-management-app-li" key={task.id}>
              <strong className="task-management-app-strong">{task.title}</strong> - Assigned to: {task.assignedTo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManagementApp;
