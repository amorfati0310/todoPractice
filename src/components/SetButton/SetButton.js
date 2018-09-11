import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const SetButtonEl = styled.button`
  position: absolute;
  font-size: 24px;
  left: 0;
  width: 65px;
  height: 65px;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 100;
`

class SetButton extends Component {

  render() {
    const {buttonText, onSetButtonClick} = this.props;
    return (
      <SetButtonEl 
      type="button"
      onClick={onSetButtonClick}>
      {buttonText}    
      </SetButtonEl>
    );
  }
}

export default SetButton;