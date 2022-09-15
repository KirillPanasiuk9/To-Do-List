import React, {useState} from 'react';
import "../SwitchMode/switchMode.css"

const SwitchMode = () => {

    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        setTheme(!theme)
        if (theme === false) {
            document.body.setAttribute('dark', '');
            document.getElementsByClassName("darkMode")[0].style.display = "block";
            document.getElementsByClassName("lightMode")[0].style.display = "none";
        } else {
            document.body.removeAttribute('dark');
            document.getElementsByClassName("darkMode")[0].style.display = "none";
            document.getElementsByClassName("lightMode")[0].style.display = "block";
        }
    }

    return (
        <div className="switchMode">
            <input
                id="switchModeCheckbox"
                className="switchModeCheckbox"
                type="checkbox"
                checked={theme}
                onChange={changeTheme}
            />
            <label
                className="switchModeLabel"
                htmlFor="switchModeCheckbox"
            >
                <div className="switchModeWrapper">
                    <div className="lightMode"/>
                    <div className="darkMode"/>
                </div>
            </label>
        </div>
    );
};

export default SwitchMode;
