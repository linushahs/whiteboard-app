import React, { useState, useEffect } from 'react';
import './cursor.css'; // Import your CSS file for custom cursor styling

const ShapeCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      {/* show the selected shape: rectange, circle or line  */}
    </div>
  );
};

export default ShapeCursor;
