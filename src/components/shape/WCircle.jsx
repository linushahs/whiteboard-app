import React, { Fragment } from "react";
import { Circle } from "react-konva";
import { useRecoilState } from "recoil";
import { cursorStyleState } from "../state/shape.state";

export const WCircle = React.forwardRef(
  ({ shapeProps, onSelect, onChange }, ref) => {
    const [cursor, setCursor] = useRecoilState(cursorStyleState);

    return (
      <Fragment>
        <Circle
          ref={ref}
          {...shapeProps}
          draggable
          onMouseEnter={(e) => setCursor({ ...cursor, type: "pointer" })}
          onMouseLeave={(e) => setCursor({ ...cursor, type: "crosshair" })}
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
        />
      </Fragment>
    );
  }
);
