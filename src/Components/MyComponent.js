import React, { useState } from 'react';

function MyComponent() {
  const [content, setContent] = useState("Initial Content");

  function handleClick() {
    setContent("New Content");
  }

  return (
    <div>
      <button onClick={handleClick}>Change Content</button>
      <div>{content}</div>
    </div>
  );
}

export default MyComponent;
