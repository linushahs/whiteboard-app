import React, { useState } from "react";
import Canvas from "./components/canvas/Canvas";
import "./App.css";
import ShapeCursor from "./components/shape/ShapeCursor";
import ShapeButtonsContainer from "./components/elements/ShapeButtonsContainer";

export default function App() {
  const [rectangles, setRectangles] = useState([]);

  const createDraggableRect = () => {
    const newRectangle = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: "black",
    };

    setRectangles([...rectangles, newRectangle]);
  };

  return (
    <div className="app-container">
      {/* <Canvas rectangles={rectangles} setRectangles={setRectangles} /> */}
      <ShapeCursor />

      <ShapeButtonsContainer />

    </div>
  );
}
