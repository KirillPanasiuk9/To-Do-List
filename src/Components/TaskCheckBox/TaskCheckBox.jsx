import React from 'react';
import "../TaskCheckBox/taskCheckBox.css"


const TaskCheckBox = ({task, handleChange}) => {

    return (
        <div className="checkboxWrapper">
            <input
                className="checkbox"
                id={task.id}
                type={"checkbox"}
                checked={task.checked}
                onChange={handleChange}
            />
            <label className="forCheckbox" htmlFor={task.id}>
                <svg viewBox="0 0 311.539 311.539">
                    <path d="M155.77,0C69.74,0,0,69.74,0,155.77s69.74,155.77,155.77,155.77s155.77-69.74,155.77-155.77S241.799,0,155.77,0z
                        M155.77,271.539C91.784,271.539,40,219.761,40,155.77C40,91.784,91.778,40,155.77,40c63.986,0,115.77,51.778,115.77,115.77
                		C271.539,219.755,219.761,271.539,155.77,271.539z"/>
                </svg>
            </label>
        </div>
    );
};

export default TaskCheckBox;
