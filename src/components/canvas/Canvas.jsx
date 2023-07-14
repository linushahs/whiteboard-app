import React, { useState } from "react";
import { Layer, Stage } from "react-konva";
import { useRecoilState, useRecoilValue } from "recoil";
import { defaultCircle, defaultRectangle } from "../actions/shape.actions";
import { WRectangle } from "../shape/WRectangle";
import {
  circlesListState,
  rectanglesListState,
  selectedShapeState,
} from "../state/shape.state";
import { WCircle } from "../shape/WCircle";

export default function Canvas() {
  // const [tool, setTool] = React.useState("pen");
  // const [lines, setLines] = React.useState([]);
  // const isDrawing = React.useRef(false);
  const [selectedRect, selectRect] = useState(null);
  const [rectangles, setRectangles] = useRecoilState(rectanglesListState);
  const [circles, setCircles] = useRecoilState(circlesListState);
  const selectedShape = useRecoilValue(selectedShapeState);

  const createDraggableRect = (e) => {
    const newRectangle = { ...defaultRectangle };
    newRectangle["x"] = e.evt.pageX;
    newRectangle["y"] = e.evt.pageY;

    setRectangles([...rectangles, newRectangle]);
  };

  const createDraggableCircle = (e) => {
    const newCircle = { ...defaultCircle };
    newCircle["x"] = e.evt.pageX;
    newCircle["y"] = e.evt.pageY;

    setCircles([...circles, newCircle]);
  };

  // const handleMouseDown = (e) => {
  //   const stage = e.target.getStage();

  //   if (!stage.mouseClickEndShape) {
  //     isDrawing.current = true;
  //     const pos = stage.getPointerPosition();
  //     setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  //   }

  //   const clickedOnEmpty = e.target === stage;
  //   if (clickedOnEmpty) {
  //     selectRect(null);
  //   }
  // };

  // const handleMouseMove = (e) => {
  //   // no drawing - skipping
  //   if (!isDrawing.current) {
  //     return;
  //   }
  //   const stage = e.target.getStage();
  //   const point = stage.getPointerPosition();
  //   let lastLine = lines[lines.length - 1];
  //   // add point
  //   lastLine.points = lastLine.points.concat([point.x, point.y]);

  //   // replace last
  //   lines.splice(lines.length - 1, 1, lastLine);
  //   setLines(lines.concat());
  // };

  // const handleMouseUp = () => {
  //   isDrawing.current = false;
  // };

  const handleCanvasClick = (e) => {
    console.log(selectedShape);
    switch (selectedShape) {
      case "rectangle":
        return createDraggableRect(e);
      case "circle":
        return createDraggableCircle(e);
      default:
        return;
    }
  };

  return (
    <Stage
      width={window.innerWidth - 50}
      height={window.innerHeight - 50}
      onClick={handleCanvasClick}
    >
      <Layer>
        {rectangles.map((rect, index) => (
          <WRectangle
            key={index}
            shapeProps={rect}
            onChange={(newAttrs) => {
              const rects = [...rectangles];
              rects[index] = newAttrs;
              setRectangles(rects);
            }}
          />
        ))}

        {circles.map((circle, index) => (
          <WCircle
            key={index}
            shapeProps={circle}
            onChange={(newAttrs) => {
              const c = [...circles];
              c[index] = newAttrs;
              setCircles(c);
            }}
          />
        ))}
      </Layer>
    </Stage>
  );
}
