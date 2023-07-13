import React, { useState, useEffect } from "react";
import { Circle, Rect } from "react-konva";

const ShapeCursor = ({ cursorStyle }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        visibility: cursorStyle.visibility ? "visible" : "hidden",
      }}
    >
      {/* show the selected shape: rectange, circle or line  */}
      <div className={cursorStyle.shape}></div>
    </div>
  );
};

export default ShapeCursor;
