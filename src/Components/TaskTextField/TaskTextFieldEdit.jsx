import React from 'react';
import "../TaskTextField/taskTextField.css"

const TaskTextFieldEdit = ({task, handleInputChange}) => {
    return (
        <input
            className="taskTextField"
            type='text'
            value={task.text}
            onChange={handleInputChange}
            autoFocus={true}
        />
    );
};

export default TaskTextFieldEdit;
