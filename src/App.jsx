import React, { useState } from "react";
import Canvas from "./components/Canvas";
import "./App.css";

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
    <div>
      <Canvas rectangles={rectangles} setRectangles={setRectangles} />

      <div className="btns-container">
        <button onClick={createDraggableRect}>Rectangle</button>
        <button>Square</button>
        <button>Circle</button>
      </div>
    </div>
  );
}
