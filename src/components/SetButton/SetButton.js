import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const SetButtonEl = styled.button`

`

class SetButton extends Component {
  handleClick = (allDone)=>{
    allDone()
  }
  render() {
    const {buttonText, onClick} = this.props;
    return (
      <SetButtonEl onClick={()=>{this.handleClick(onClick)}}>
      {buttonText}    
      </SetButtonEl>
    );
  }
}

export default SetButton;