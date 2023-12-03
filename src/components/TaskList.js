import { useState } from "react";
import "../styles.css";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { InventoryContext } from "../data/inventoryContext";
import { Button, TextField, Grid } from '@mui/material';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);

    // remove the form after creating a product
    setEditing(null);
  }

  function updateTask(task) {
    const updatedTasks = tasks.map((a) => {
      if (a.id === task.id) {
        return task;
      } else {
        return a;
      }
    });
    setTasks(updatedTasks);

    // remove the form after updating a product
    setEditing(null);
  }

  function removeTask(track) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== track.id;
    });
    setTasks(updatedTasks);
  }

  function toggleDone(track) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === track.id) {
        task.task_done = !task.task_done;

        //strikethrough if the task was done
        if (task.task_done === true) {
          tasks.title = <del>{task.title}</del>;
        }

        // update time
        if (task.task_done) {
          task.completedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        } else {
          task.completedAt = null;
        }

        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <InventoryContext.Provider
        value={{
          tasks,
          addTask,
          updateTask,
          removeTask,
          editing,
          setEditing
        }}
      >
        {editing ? (
          <>
            <TaskForm addTask={addTask} />
          </>
        ) : (
          <>
            <button className="add_task" onClick={() => setEditing("new")}>
              Add Task
            </button>
            <div className="task_list">
              <h2>Your Tasks:</h2>
              <ul>
                {tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    remove={removeTask}
                    togglePlayed={toggleDone}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </InventoryContext.Provider>
    </div>
  );
}
