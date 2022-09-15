import React from 'react';
import '../CompletedTaskList/completedTaskList.css'
import CompletedTask from "../CompletedTask/CompletedTask";
import TaskCompletedCount from "../TaskCompletedCount/TaskCompletedCount";

const CompletedTaskList = ({
                   completedTasks,
                   deleteTask,
                   completeTask,
                   createTask,
                   taskList
                    }) => {
    return (
        <div className="completedTaskList">
            <TaskCompletedCount
                taskList={taskList}
                completedTasks={completedTasks}
            />
            {completedTasks.map(compTask =>
                <CompletedTask
                    task={compTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    createTask={createTask}
                />
            )}
        </div>
    );
};

export default CompletedTaskList;
