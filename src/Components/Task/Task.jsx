import React, {useEffect, useRef, useState} from 'react';
import '../Task/task.css';
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import TaskCheckBox from "../TaskCheckBox/TaskCheckBox";
import TaskTextFieldEdit from "../TaskTextField/TaskTextFieldEdit";

const Task = ({
              task,
              createTask,
              deleteTask,
              completeTask,
              updateTask,
              }) => {

    const [edit, setEdit] = useState(true)


    const handleChange = () => {
        if (task.checked === true) {
            task.checked = false;
            createTask(task);
        } else {
            task.checked = true;
            completeTask(task);
        }
    }

    const handleInputChange = (event) => {
        const text = event.target.value
        const updTask = {
            ...task,
            text,
        }
        updateTask(updTask)
    }

    const handleEditChange = () => {
        setEdit(!edit)
    }


    return edit === true ? (
        <div className="task">
            <TaskCheckBox task={task} handleChange={handleChange}/>
            <div className="taskTextField">
                {task.text}
            </div>
            <div className='taskButtons'>
                <EditButton handleEditChange={handleEditChange}/>
                <DeleteButton task={task} deleteTask={deleteTask}/>
            </div>
        </div>

    ) : (
        <div className="task task-edited">
            <TaskTextFieldEdit task={task} handleInputChange={handleInputChange}/>
            <div className='taskButtons taskButtons-edited'>
                <button className="saveEditButton" onClick={handleEditChange}>
                    {"Save"}
                </button>
            </div>
        </div>
    )
};

export default Task;
