import React from 'react';

const TaskTextFieldCompleted = ({task}) => {
    return (
        <div className="taskTextField">{task.text}</div>
    );
};

export default TaskTextFieldCompleted;
