import React from 'react'

export default function Slider({ min, max, value, unit, handleChange }) {
    return (
        <div className="slider-container">
            <p className="slider-value">{value} {unit}</p>
            <input
                className="slider"
                type='range'
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
