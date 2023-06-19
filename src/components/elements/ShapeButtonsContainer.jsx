import React from 'react'

export default function ShapeButtonsContainer() {
    return (
        <div className="btns-container">
            <button onClick={createDraggableRect}>Rectangle</button>
            <button>Square</button>
            <button>Circle</button>
        </div>
    )
}
