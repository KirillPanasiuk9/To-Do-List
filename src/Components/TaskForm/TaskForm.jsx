import React, {useState} from 'react';
import './taskForm.css'

const TaskForm = ({createTask}) => {

    const [task, setTask] = useState({text: ''})

    const shakeInput = () => {
        let input = document.getElementById("taskInput");
        input.style.transform = "translate(5px,0)"
        setTimeout(() => input.style.transform = "translate(-5px,0)", 70)
        setTimeout(() => input.style.transform = "translate(5px,0)", 140)
        setTimeout(() => input.style.transform = "translate(-5px,0)", 210)
        setTimeout(() => input.style.transform = "translate(5px,0)", 280)
        setTimeout(() => input.style.transform = "translate(-5px,0)", 350)
        setTimeout(() => input.style.transform = "translate(0,0)", 420)
    }

    const addTask = (event) =>  {
        event.preventDefault()
        const newTask = {
            ...task,
            id: Date.now(),
        }
        task.text === ''
            ? shakeInput()
            : createTask(newTask)
        setTask({text: ''})
    }

    return (
        <form className="taskForm">
            <input
                className="taskInput"
                id="taskInput"
                type='text'
                placeholder="Enter your Task"
                value={task.text}
                onChange={event => setTask({text: event.target.value})}
            />
            <button className="addTaskButton" onClick={addTask}>
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
