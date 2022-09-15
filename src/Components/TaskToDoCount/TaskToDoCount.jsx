import React from 'react';
import "../TaskToDoCount/taskToDoCount.css"
import "../TaskList/taskList.css"

const TaskToDoCount = ({taskList}) => {
    return (
        <div className="taskToDoCount">
            <strong>Task to be done</strong>
            <span><strong>{taskList.length}</strong></span>
        </div>
    );
};

export default TaskToDoCount;
