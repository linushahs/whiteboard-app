import React from "react";

export default function ShapeButtonsContainer({
  createDraggableRect,
  createDraggableCircle,
}) {
  return (
    <div className="btns-container">
      <button onClick={createDraggableRect}>Rectangle</button>
      <button>Square</button>
      <button onClick={createDraggableCircle}>Circle</button>
    </div>
  );
}
