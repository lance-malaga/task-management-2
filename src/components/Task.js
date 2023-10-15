import "../styles.css";
import { useContext } from "react";
import { InventoryContext } from "../data/inventoryContext";

export default function Task(props) {
  const task = props.task;
  const { editing, setEditing, updateTask } = useContext(InventoryContext);

  function handleDelete(e) {
    props.remove(task);
  }

  function handleStatusChange() {
    props.togglePlayed(task);
  }

  return (
    <li className="task">
      <p>
        <span>
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={task.task_done}
          />
          {task.task_done === true ? <del>{task.title}</del> : task.title}
        </span>
      </p>
      <div className="task__functions">
        {/* <img src={editIcon} alt="edit" width={30} height={30} /> */}

        <button onClick={() => setEditing(task.id)}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
}
