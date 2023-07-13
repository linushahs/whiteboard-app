import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import Canvas from "./components/canvas/Canvas";
import ShapeButtonsContainer from "./components/elements/ShapeButtonsContainer";
import ShapeCursor from "./components/elements/ShapeCursor";
import {
  circlesList,
  cursorStyle,
  linesList,
  rectanglesList,
} from "./components/state/shape.state";
import { defaultRectangle } from "./components/actions/shape.actions";
import { Stage, Layer, Rect } from "react-konva";

export default function App() {
  const [lines, setLines] = useRecoilState(linesList);
  const [rectangles, setRectangles] = useRecoilState(rectanglesList);
  const [circles, setCircles] = useRecoilState(circlesList);
  const cursor = useRecoilValue(cursorStyle);

  const createDraggableRect = () => {
    setRectangles([...rectangles, defaultRectangle]);
  };

  return (
    <div
      className="app-container"
      style={{ cursor: cursor.type }}
      onClickCapture={(e) => {
        createDraggableRect();
      }}
    >
      <ShapeCursor />

      <Canvas />
      <ShapeButtonsContainer />
    </div>
  );
}
