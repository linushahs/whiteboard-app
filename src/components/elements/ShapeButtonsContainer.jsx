import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cursorStyle } from "../state/shape.state";

export default function ShapeButtonsContainer() {
  const [disabledButton, setDisabledButton] = useState(null);
  const [cursor, setCursor] = useRecoilState(cursorStyle);

  const handleButtonClick = (buttonType) => {
    setDisabledButton(buttonType);
    setCursor({ type: "crosshair", shape: buttonType });
  };

  return (
    <div
      className="btns-container"
      onMouseEnter={() => setCursor({ ...cursor, visibility: false })}
      onMouseLeave={() => setCursor({ ...cursor, visibility: true })}
    >
      <button
        onClick={() => handleButtonClick("rectangle")}
        disabled={disabledButton === "rectangle"}
      >
        Rectangle
      </button>
      <button>Line</button>
      <button
        onClick={() => handleButtonClick("circle")}
        disabled={disabledButton === "circle"}
      >
        Circle
      </button>
    </div>
  );
}
