import React, { Component } from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  position: relative;
  width: 345px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #e8e8e8;
  box-sizing: border-box;
  padding-left: 40px;
  ::placeholder {
    color: #d8d8d8
  }
`

class SearchInput extends Component {
  render() {
    return (
      <form>
        <StyledInput type="text" placeholder="Search for tasks"/>
      </form>
    );
  }
}

export default SearchInput;