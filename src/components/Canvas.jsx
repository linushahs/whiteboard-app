import React, { useRef, useState } from "react";
import { Stage, Layer, Text, Line, Rect, Transformer } from "react-konva";
import { Rectangle } from "./Rectangle";

export default function Canvas({ rectangles, setRectangles }) {
  const [tool, setTool] = React.useState("pen");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);
  const [selectedRect, selectRect] = useState(null);

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();

    if (!stage.mouseClickEndShape) {
      isDrawing.current = true;
      const pos = stage.getPointerPosition();
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    }

    const clickedOnEmpty = e.target === stage;
    if (clickedOnEmpty) {
      selectRect(null);
    }
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <Stage
      width={window.innerWidth - 50}
      height={window.innerHeight - 50}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer>
        {rectangles.map((rect, index) => (
          <Rectangle
            key={index}
            shapeProps={rect}
            isSelected={index === selectedRect}
            onSelect={() => {
              selectRect(index);
            }}
            onChange={(newAttrs) => {
              const rects = rectangles.slice();
              rects[index] = newAttrs;
              setRectangles(rects);
            }}
          />
        ))}

        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke="#df4b26"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
              line.tool === "eraser" ? "destination-out" : "source-over"
            }
          />
        ))}
      </Layer>
    </Stage>
  );
}
