import React, { useState } from 'react';

function Sidebar() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSidebar = () => {
        setIsToggled(!isToggled);
    }

    return (
        <div id="wrapper" className={`${isToggled ? 'toggled' : ''}`}>
            <button id="menu-toggle" onClick={toggleSidebar}>Toggle Sidebar</button>
            {/* Sidebar content goes here */}
            
        </div>
    );
}

export default Sidebar;
