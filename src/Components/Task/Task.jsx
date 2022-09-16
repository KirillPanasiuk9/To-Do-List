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
    const [textFieldEdit, setTextFieldEdit] = useState(task.text)
    const shakeEditedTask = (id) => {
        let editedTask = document.getElementById(id);
        editedTask.style.transform = "translate(5px,0)"
        setTimeout(() => editedTask.style.transform = "translate(-6px,0)", 70)
        setTimeout(() => editedTask.style.transform = "translate(6px,0)", 140)
        setTimeout(() => editedTask.style.transform = "translate(-6px,0)", 210)
        setTimeout(() => editedTask.style.transform = "translate(6px,0)", 280)
        setTimeout(() => editedTask.style.transform = "translate(-6px,0)", 350)
        setTimeout(() => editedTask.style.transform = "translate(0,0)", 420)
    }


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
        setTextFieldEdit(event.target.value)
    }

    const handleEditChangeSave = () => {
        const text = textFieldEdit;
        const updTask = {
            ...task,
            text,
        }

        if (text === "") {
            let id = (task.id/444).toString()
            shakeEditedTask(id)
        } else {
            updateTask(updTask);
            setEdit(!edit);
        }
    }

    const handleEditChangeUnSave = () => {
        setTextFieldEdit(task.text)
        setEdit(!edit);
    }


    return edit === true ? (

        <div className="task">
            <TaskCheckBox task={task} handleChange={handleChange}/>
            <div className="taskTextField">
                {task.text}
            </div>
            <div className='taskButtons'>
                <EditButton handleEditChangeSave={handleEditChangeSave}/>
                <DeleteButton task={task} deleteTask={deleteTask}/>
            </div>
        </div>

    ) : (
        <div className="task task-edited" id={task.id/444}>
            <TaskTextFieldEdit
                handleInputChange={handleInputChange}
                handleEditChangeSave={handleEditChangeSave}
                textFieldEdit={textFieldEdit}
                handleEditChangeUnSave={handleEditChangeUnSave}
            />
            <div className='taskButtons taskButtons-edited'>
                <button className="saveEditButton" onClick={handleEditChangeSave}>
                    {"Save"}
                </button>
            </div>
        </div>
    )
};

export default Task;
