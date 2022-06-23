import React, {useState} from 'react';
import UseDarkSide from '../hooks/useDarkSide';
import {DarkModeSwitch} from 'react-toggle-dark-mode';

function Switcher() {
    const [colorTheme, setTheme] = UseDarkSide();
    const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    return (
        <>
            <div className="n-16 flex flex-col items-center">
                <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={40} />
            </div>
        </>
    );
}

export default Switcher;