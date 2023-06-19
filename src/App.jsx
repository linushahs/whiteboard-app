import React, { useState } from "react";
import Canvas from "./components/canvas/Canvas";
import "./App.css";
import ShapeCursor from "./components/elements/ShapeCursor";
import ShapeButtonsContainer from "./components/elements/ShapeButtonsContainer";

export default function App() {
  const [rectangles, setRectangles] = useState([]);
  const [circles, setCircles] = useState([]);
  const [lines, setLines] = useState([]);
  const [cursorStyle, setCursorStyle] = useState({
    type: "default",
    shape: "",
  });

  const createDraggableRect = () => {
    const newRectangle = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: "black",
    };

    setCursorStyle({ type: "crosshair", shape: "rectangle" });
    setRectangles([...rectangles, newRectangle]);
  };

  const createDraggableCircle = () => {
    const newCircle = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: "black",
    };

    setCursorStyle({ type: "crosshair", shape: "circle" });
    setCircles([...circles, newCircle]);
  };

  return (
    <div className="app-container" style={{ cursor: cursorStyle.type }}>
      {/* <Canvas rectangles={rectangles} setRectangles={setRectangles} /> */}
      <ShapeCursor cursorStyle={cursorStyle} />

      <ShapeButtonsContainer
        createDraggableCircle={createDraggableCircle}
        createDraggableRect={createDraggableRect}
      />
    </div>
  );
}
