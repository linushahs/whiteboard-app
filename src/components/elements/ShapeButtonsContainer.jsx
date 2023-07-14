import React from "react";
import { useRecoilState } from "recoil";
import { cursorStyleState, selectedShapeState } from "../state/shape.state";

export default function ShapeButtonsContainer() {
  const [shape, selectShape] = useRecoilState(selectedShapeState);
  const [cursor, setCursor] = useRecoilState(cursorStyleState);

  const handleButtonClick = (e, buttonType) => {
    selectShape(buttonType);
    setCursor({ type: "crosshair", shape: buttonType, visibility: true });
  };

  return (
    <div
      className="btns-container"
      onMouseEnter={() => setCursor({ ...cursor, visibility: false })}
      onMouseLeave={() => setCursor({ ...cursor, visibility: true })}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={(e) => handleButtonClick(e, "rectangle")}
        disabled={shape === "rectangle"}
      >
        Rectangle
      </button>
      <button>Line</button>
      <button
        onClick={(e) => handleButtonClick(e, "circle")}
        disabled={shape === "circle"}
      >
        Circle
      </button>
    </div>
  );
}
