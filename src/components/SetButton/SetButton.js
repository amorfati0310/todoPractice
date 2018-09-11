import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const SetButtonEl = styled.button`
  position: absolute;
  left: 50px;
  width: 65px;
  height: 65px;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 100;
`

class SetButton extends Component {

  render() {
    const {buttonText, onClick} = this.props;
    return (
      <SetButtonEl onClick={onClick}>
      {buttonText}    
      </SetButtonEl>
    );
  }
}

export default SetButton;