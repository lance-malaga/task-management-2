import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { InventoryContext } from "../data/inventoryContext";
import "../styles.css";

export default function TaskForm(props) {
  const { tasks, addTask, updateTask, editing, setEditing } = useContext(
    InventoryContext
  );

  let initialData = {
    title: "",
    task_done: false
  };

  if (editing !== "new") {
    initialData = tasks.find((a) => {
      return a.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    // wont refresh page
    e.preventDefault();

    //add task to list
    if (editing === "new") {
      addTask({
        ...task,
        task_done: false,
        id: nanoid()
      });
    } else {
      updateTask(task);
    }

    // resetting input to blank
    setTask("");
  }

  function handleInput(e, field) {
    setTask({ ...task, [field]: e.target.value });
  }

  return (
    <div className="task_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleInput(e, "title")}
          placeholder="Write a Task"
          value={task.title}
        />
        <button className="add_button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
