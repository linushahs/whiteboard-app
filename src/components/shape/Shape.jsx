import React, { useRef, useEffect, Fragment } from "react";
import { Rect, Transformer, Circle, Line } from "react-konva";
import { WRectangle } from "./WRectangle";
import { WCircle } from "./WCircle";
import { WLine } from "./WLine";

export function Shape({ type, shapeProps, isSelected, onSelect, onChange }) {
    const shapeRef = useRef();
    const trRef = useRef();

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    const renderShape = () => {
        const shapeTypeProps = {
            shapeRef,
            shapeProps,
            onSelect,
            onChange
        }

        switch (type) {
            case "rectangle":
                return <WRectangle {...shapeTypeProps} />;
            case "circle":
                return <WCircle {...shapeTypeProps} />;
            case "line":
                return <WLine {...shapeTypeProps} />;
            default:
                return null;
        }
    };

    return (
        <Fragment>
            {renderShape()}

            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </Fragment>
    );
}
