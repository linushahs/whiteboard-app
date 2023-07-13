import React, { useState } from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import Canvas from "./components/canvas/Canvas";
import ShapeButtonsContainer from "./components/elements/ShapeButtonsContainer";
import ShapeCursor from "./components/elements/ShapeCursor";
import {
  circlesList,
  linesList,
  rectanglesList,
} from "./components/state/shape.state";
import {
  defaultCircle,
  defaultRectangle,
} from "./components/actions/shape.actions";

export default function App() {
  const [rectangles, setRectangles] = useRecoilState(rectanglesList);
  const [circles, setCircles] = useRecoilState(circlesList);
  const [lines, setLines] = useRecoilState(linesList);

  const createDraggableRect = () => {
    setRectangles([...rectangles, defaultRectangle]);
  };

  const createDraggableCircle = () => {
    setCircles([...circles, defaultCircle]);
  };

  return (
    <div className="app-container" style={{ cursor: cursorStyle.type }}>
      {/* <Canvas rectangles={rectangles} setRectangles={setRectangles} /> */}
      <ShapeCursor cursorStyle={cursorStyle} />

      <Canvas rectangles={rectangles} />

      <ShapeButtonsContainer
        createDraggableCircle={createDraggableCircle}
        createDraggableRect={createDraggableRect}
      />
    </div>
  );
}
