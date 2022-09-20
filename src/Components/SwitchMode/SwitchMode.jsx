import React, {useState} from 'react';
import "../SwitchMode/switchMode.css"

const SwitchMode = ({mode, setMode}) => {

    const body = document.querySelector("body");

    const changeTheme = () => {
        // setMode(!mode);
        localStorage.setItem(
            "dark-mode",
            body.classList.contains("dark") ? "true" : "false"
        );
    }
    //     if (mode === true) {
    //         localStorage.setItem("mode", "dark")
    //         document.body.setAttribute('dark', '');
    //         document.getElementsByClassName("darkMode")[0].style.display = "block";
    //         document.getElementsByClassName("lightMode")[0].style.display = "none";
    //     } else {
    //         localStorage.setItem("mode", "light")
    //         document.body.removeAttribute('dark');
    //         document.getElementsByClassName("darkMode")[0].style.display = "none";
    //         document.getElementsByClassName("lightMode")[0].style.display = "block";
    //     }
    //     setMode(!mode)

    return (
        <div className="switchMode">
            <button className="switchModeWrapper"
                    // onClick={changeTheme}
                    onClick={() => {body.classList.toggle("dark"); changeTheme()}}>
                <div className="lightMode"/>
                <div className="darkMode"/>
            </button>
            {/*<input*/}
            {/*    id="switchModeCheckbox"*/}
            {/*    className="switchModeCheckbox"*/}
            {/*    type="checkbox"*/}
            {/*    checked={mode}*/}
            {/*    onChange={changeTheme}*/}
            {/*/>*/}
            {/*<label*/}
            {/*    className="switchModeLabel"*/}
            {/*    htmlFor="switchModeCheckbox"*/}
            {/*>*/}
            {/*    <div className="switchModeWrapper">*/}
            {/*        <div className="lightMode"/>*/}
            {/*        <div className="darkMode"/>*/}
            {/*    </div>*/}
            {/*</label>*/}
        </div>
    );
};

export default SwitchMode;
