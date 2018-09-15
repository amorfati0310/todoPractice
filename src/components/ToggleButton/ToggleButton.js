import React from 'react';

const ToggleIconButton = ({active, activeSrc, deactiveSrc, onClick}) => {
  const iconSrc = active ? activeSrc: deactiveSrc
  return (
    <button onClick={onClick}>
      <img src={iconSrc} alt=""/>
    </button>
  );
};

export default ToggleButton;