import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Home from './Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  function enableComponent() {
    setIsEnabled(true);
  }

  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
        <Navbar/>
        Hello World
      <button className="mt-5" onClick={enableComponent}>Enable Component</button>
      {isEnabled && <Sidebar />}
    </div>
  );
}

export default MyComponent;
