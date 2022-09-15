import React, {useState} from 'react';
import '../Task/task.css';
import "../CompletedTask/completedTask.css"
import DeleteButton from "../DeleteButton/DeleteButton";
import TaskCheckBox from "../TaskCheckBox/TaskCheckBox";
import TaskTextFieldCompleted from "../TaskTextField/TaskTextFieldCompleted";
import TaskCheckBoxCompleted from "../TaskCheckBox/TaskCheckBoxCompleted";


const CompletedTask = ({
               task,
               completeTask,
               createTask,
               deleteTask,
           }) => {

    const handleChange = () => {
        if (task.checked === true) {
            task.checked = false;
            createTask(task);
        } else {
            task.checked = true;
            completeTask(task);
        }
    }


    return (
        <div className="completedTask">
            <TaskCheckBoxCompleted task={task} handleChange={handleChange}/>
            <TaskTextFieldCompleted task={task}/>
            <div className='taskButtons taskButtons-completed'>
                <DeleteButton task={task} deleteTask={deleteTask}/>
            </div>
        </div>
    );
};

export default CompletedTask;
