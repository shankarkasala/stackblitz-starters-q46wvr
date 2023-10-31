import React, { useState } from 'react';

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const x = e.clientX - startPosition.x;
      const y = e.clientY - startPosition.y;
      setPosition({ x, y });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <div
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        style={{
          position: 'absolute',
          left: position.x + 'px',
          top: position.y + 'px',
          border: '1px solid #000',
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {isDragging ? 'Dragging...' : 'Drag me'}
      </div>
    </div>
  );
}

export default App;
