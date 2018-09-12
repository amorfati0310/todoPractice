import React, { Component } from 'react';
import styled from "styled-components";

const searchIcon = require('../../assets/images/search-icon.svg')

const FormWrapper = styled.form `
   position: relative;
   box-sizing: border-box;
   padding-left: 10px;
   padding-right: 10px;
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
const SearchButton = styled.button`
  position: absolute;
  left: 10px;
  width: 35px;
  height: 35px;
  
  & img {
    max-width: 100%;
  }
`


class SearchInput extends Component {
  render() {
    return (
      <FormWrapper>
        <SearchButton>
          <img src={searchIcon} alt=""/>
        </SearchButton>
        <StyledInput type="text" placeholder="Search for tasks"/>
      </FormWrapper>
    );
  }
}

export default SearchInput;