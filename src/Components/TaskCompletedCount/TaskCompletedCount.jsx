import React from 'react';
import "../TaskCompletedCount/taskCompletedCount.css"

const TaskCompletedCount = ({taskList, completedTasks}) => {
    return (
        <div className="taskCompletedCount">
            <strong>Completed Tasks</strong>
            <span><strong>{completedTasks.length} of {taskList.length+completedTasks.length}</strong></span>
        </div>
    );
};

export default TaskCompletedCount;
