import React from 'react';
import "../TaskTextField/taskTextField.css"

const TaskTextFieldEdit = ({handleInputChange, handleEditChangeSave,textFieldEdit, handleEditChangeUnSave}) => {

    const handleEditChangeKye = (key) => {
        if (key === "Enter") {
            handleEditChangeSave()
        } else if (key === "Escape") {
            handleEditChangeUnSave()
        }
    }

    return (
        <input
            className="taskTextField"
            type='text'
            value={textFieldEdit}
            onChange={handleInputChange}
            onKeyDown={event => (handleEditChangeKye(event.key))}
            autoFocus={true}
        />
    );
};

export default TaskTextFieldEdit;
