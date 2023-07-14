import React from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import { defaultRectangle } from "./components/actions/shape.actions";
import Canvas from "./components/canvas/Canvas";
import ShapeButtonsContainer from "./components/elements/ShapeButtonsContainer";
import ShapeCursor from "./components/elements/ShapeCursor";
import {
  circlesListState,
  cursorStyleState,
  linesListState,
  rectanglesListState,
} from "./components/state/shape.state";

export default function App() {
  // const [lines, setLines] = useRecoilState(linesListState);
  // const [rectangles, setRectangles] = useRecoilState(rectanglesListState);
  // const [circles, setCircles] = useRecoilState(circlesListState);
  const [cursor, setCursor] = useRecoilState(cursorStyleState);

  return (
    <div className="app-container" style={{ cursor: cursor.type }}>
      <ShapeCursor />

      <Canvas />
      <ShapeButtonsContainer />
    </div>
  );
}
