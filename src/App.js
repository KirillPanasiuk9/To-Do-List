import './App.css';
import Task from "./Components/Task/Task";
import React, {lazy, useState} from "react";
import TaskList from "./Components/TaskList/TaskList";
import TaskForm from "./Components/TaskForm/TaskForm";
import CompletedTaskList from "./Components/CompletedTaskList/CompletedTaskList";
import SwitchMode from "./Components/SwitchMode/SwitchMode";

function App() {

    const [taskList, setTaskList] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const createTask = (newTask) => {
        setCompletedTasks(completedTasks.filter(task => task.id !== newTask.id))
        setTaskList([...taskList, newTask])
    }

    const deleteTask = (deletedTask) => {
        setTaskList(taskList.filter(task => task.id !== deletedTask.id))
        setCompletedTasks(completedTasks.filter(task => task.id !== deletedTask.id))
    }

    const completeTask = (checkedTask) => {
        setTaskList(taskList.filter(task => task.id !== checkedTask.id))
        setCompletedTasks([...completedTasks, checkedTask])
    }

    const updateTask = (updTask) => {
        const index = taskList.findIndex( value => value.id === updTask.id);
        const newList = [...taskList];
        newList[index] = updTask;
        setTaskList(newList);
    }



    return (
      <div className="App">
          <div className="navBar">
              <h1>To Do List</h1>
              <SwitchMode/>
          </div>
          <TaskForm createTask={createTask}/>

          {completedTasks.length + taskList.length === 0 ?

              <div className="noTasks">
                  <svg
                      width="24px"
                      height="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 311.539 311.539"
                  >
                      <path d="M236.981,98.019c-7.811-7.811-20.475-7.811-28.285,0l-81.935,81.936l-37.046-37.047c-7.811-7.811-20.475-7.811-28.285,0
		                s-7.811,20.475,0,28.285l51.188,51.188c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857l96.077-96.077
		                C244.792,118.494,244.792,105.83,236.981,98.019z"/>
                  </svg>
                  <p>{"You have no tasks"}</p>
              </div>

              :

              <div className="tasksContainer">
                  <TaskList
                      taskList={taskList}
                      createTask={createTask}
                      deleteTask={deleteTask}
                      completeTask={completeTask}
                      completedTasks={completedTasks}
                      updateTask={updateTask}
                    />
                  <CompletedTaskList
                      completedTasks={completedTasks}
                      deleteTask={deleteTask}
                      createTask={createTask}
                      completeTask={completeTask}
                      taskList={taskList}
                  />
              </div>
          }
      </div>
    );
}

export default App;


// const data = {
//     allIds: [/* your all ids like array*/],
//     byId: {
//         id1: {},
//         //rest of data elements
//     }
// }
//
// data.allIds.map((id) => {
//     <Task task={data.byId[id]} />
// })

// setState((prev) => ({
//     ...prev,
//     byId: {
//         ...prev.byId,
//         [updTask.id]: updTask,
//     }
// }))

// setTaskList((prev) => {
//     prev[index] = updTask;
//     return prev;
// })
