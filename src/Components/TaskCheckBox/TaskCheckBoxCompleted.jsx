import React from 'react';
import "../TaskCheckBox/taskCheckBox.css"

const TaskCheckBoxCompleted = ({task, handleChange}) => {
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
                    <path d="M236.981,98.019c-7.811-7.811-20.475-7.811-28.285,0l-81.935,81.936l-37.046-37.047c-7.811-7.811-20.475-7.811-28.285,0
		                s-7.811,20.475,0,28.285l51.188,51.188c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857l96.077-96.077
		                C244.792,118.494,244.792,105.83,236.981,98.019z"/>
                </svg>
            </label>
        </div>
    );
};

export default TaskCheckBoxCompleted;
