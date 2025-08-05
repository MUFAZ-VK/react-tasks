import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: true },
    { id: 2, name: "Build Project", completed: false },
    { id: 3, name: "Submit Assignment", completed: true },
    { id: 4, name: "Drink Coffee", completed: false }
  ]);

  const [showCompleted, setShowCompleted] = useState(true);
  const visibleTasks = showCompleted ? tasks : tasks.filter(task => !task.completed);

  return (
    <div>
      <h3>Task List with Filter</h3>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Hide completed tasks' : 'preview all tasks'}
      </button>

      <ul>
        {visibleTasks.map(task => (
          <li key={task.id}>
            {task.name}
            {task.completed ? ' ✅' : ' ❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
