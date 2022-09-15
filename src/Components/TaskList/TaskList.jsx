import React from 'react';
import Task from "../Task/Task";
import TaskToDoCount from "../TaskToDoCount/TaskToDoCount";
import TaskCompletedCount from "../TaskCompletedCount/TaskCompletedCount";
import "./taskList.css"

const TaskList = ({
          taskList,
          deleteTask,
          completeTask,
          createTask,
          updateTask
    }) => {

    return (
        <div className="taskList">
            <TaskToDoCount taskList={taskList}/>

            {taskList.map(task =>
                <Task
                    task={task}
                    key={task.id}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    updateTask={updateTask}
                />
            )}
        </div>
    );
};

export default TaskList;
