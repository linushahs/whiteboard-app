import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { circlesList, cursorStyle, rectanglesList } from "../state/shape.state";
import { defaultCircle, defaultRectangle } from "../actions/shape.actions";

const ShapeCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursor = useRecoilValue(cursorStyle);

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
        visibility: cursor.visibility ? "visible" : "hidden",
      }}
    >
      {/* show the selected shape: rectange, circle or line  */}
      <div className={cursor.shape}></div>
    </div>
  );
};

export default ShapeCursor;
