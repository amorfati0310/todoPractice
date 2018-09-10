import React from 'react';
import styled from "styled-components";

const AddButton = styled.button`
  position: fixed;
  border-radius: 50%;
  padding: 0;
  border: none;
  width: 50px;
  height: 50px;
  background: transparent;
  bottom: 20px;
  right: 20px;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`

const IconButton = ({iconSrc, onClick}) => {
  return (
    <AddButton onClick={onClick}>
      <img src={iconSrc} alt=""/>
    </AddButton>
  );
};

export default IconButton;