import "../styles.css";
import { useContext } from "react";
import { InventoryContext } from "../data/inventoryContext";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';

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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '35%',
        wordBreak: 'break-word',
        textAlign: 'left',
      }}>
          <Checkbox
            checked={task.task_done}
            onChange={handleStatusChange}
            color="primary"
            sx={{
              color: "white",
             }}
          />
          {task.task_done === true ? <del>{task.title}</del> : task.title}
      </div>
      <div>
        <p>Started at: {task.createdAt}</p>
        {task.task_done &&     
          <p>{`Completed at: ${task.completedAt}`}</p>
        }
      </div>
      <div className="task__functions">
        <Button 
          variant="outlined"
          color="secondary"
          startIcon={<EditIcon />}
          onClick={() => setEditing(task.id)}
          style={{border: 'none'}}
          sx={{
            ":hover": {
              color: "white"
            }
          }}
        >
          Edit
        </Button>
        <Button 
          variant="outlined"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          style={{border: 'none'}}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
