import React, { Component } from 'react';
import styled from "styled-components";
import {IconButton} from '../IconButton/IconButton';
const searchIcon = require('../../assets/images/search-icon.svg')


const FormEl = styled.form`
 position: relative;
 display: flex;
 align-items: center;
`

const StyledInput = styled.input`
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

//
const SearchButton = styled(IconButton)`
  position: absolute;
  left: 40px;
`
//


const searchSize = 40;

class SearchInput extends Component {
  render() {
    return (
      <FormEl>
        <SearchButton iconSrc={searchIcon} size={searchSize}/>
        <StyledInput type="text" placeholder="Search for tasks"/>
      </FormEl>
    );
  }
}

export default SearchInput;