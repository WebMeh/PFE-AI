import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Button } from 'react-bootstrap';

const MyButtonGroup = ({ buttons, activeColor = 'primary', inactiveColor = 'light' }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Initially no buttons are active

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ButtonGroup>
      {buttons.map((button, index) => (
        <ToggleButton
          key={index}
          id={`button-${index}`}
          variant={activeIndex === index ? activeColor : inactiveColor}
          onClick={() => handleClick(index)}
        >
          {button.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default MyButtonGroup;
