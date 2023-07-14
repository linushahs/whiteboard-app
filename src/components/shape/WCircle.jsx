import React, { Fragment, useRef } from "react";
import { Circle, Transformer } from "react-konva";
import { useRecoilState } from "recoil";
import { cursorStyleState } from "../state/shape.state";

export const WCircle = React.forwardRef(
  ({ shapeProps, isSelected, onSelect, onChange }, ref) => {
    const shapeRef = useRef();
    const trRef = useRef();
    const [cursor, setCursor] = useRecoilState(cursorStyleState);

    const handleSelect = (e) => {
      onSelect();
      e.cancelBubble = true;
    };

    const handleTransform = () => {
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();

      // Reset scale to maintain shape's width and height
      node.scaleX(1);
      node.scaleY(1);

      onChange({
        ...shapeProps,
        x: node.x(),
        y: node.y(),
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(5, node.height() * scaleY),
      });
    };

    React.useEffect(() => {
      if (isSelected) {
        // we need to attach transformer manually
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected]);

    return (
      <Fragment>
        <Circle
          ref={shapeRef}
          {...shapeProps}
          draggable
          onClick={handleSelect}
          onMouseEnter={() => setCursor({ ...cursor, type: "pointer" })}
          onMouseLeave={() => setCursor({ ...cursor, type: "crosshair" })}
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={() => {
            handleTransform();
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
            }}
          />
        )}
      </Fragment>
    );
  }
);
