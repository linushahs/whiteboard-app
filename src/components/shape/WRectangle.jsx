import React, { Fragment } from "react";
import { Rect } from "react-konva";

export const WRectangle = React.forwardRef(
  ({ shapeProps, onSelect, onChange }, ref) => {
    return (
      <Fragment>
        <Rect
          ref={ref}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   onSelect();
          // }}
          // onTap={onSelect}
          x={100}
          y={100}
          width={100}
          height={100}
          fill="black"
          draggable
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = ref.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(5, node.height() * scaleY),
            });
          }}
        />
      </Fragment>
    );
  }
);
