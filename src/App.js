import { useState } from 'react';

import './App.css';
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";

const DEFAULT_OPTIONS = [
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: 'px',
  },
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 500,
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 500,
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
  {
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Opacity',
    property: 'opacity',
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
]

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState(DEFAULT_OPTIONS);
  const selectedFilter = filters[selectedIndex];

  function handleSliderChange({ target }) {
    setFilters(prevFilters => {
      return prevFilters.map((filter, index) => {
        if (index !== selectedIndex) return filter
        return { ...filter, value: target.value }
      })
    })
  }

  function getImageStyle() {
    return {
      filter: filters.map(filter => `${filter.property}(${filter.value}${filter.unit})`).join(' ')
    }
  }

  return (
    <div className="container">
      <div className="image-container" style={getImageStyle()}></div>
      <div className="sidebar-container">
        {filters.map((filter, index) => (
          <SidebarItem
            key={filter.name}
            name={filter.name}
            active={index === selectedIndex}
            handleClicked={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <Slider
        min={selectedFilter.range.min}
        max={selectedFilter.range.max}
        value={selectedFilter.value}
        unit={selectedFilter.unit}
        handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
