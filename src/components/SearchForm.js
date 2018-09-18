import React, { Component } from 'react';
import styled from "styled-components";

const searchIcon = require('../assets/images/search-icon.svg')

const FormWrapper = styled.form `
   position: relative;
   box-sizing: border-box;
   margin-top: 16px;
`

const StyledInput = styled.input`
 
  width: 100%;
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
  left: 0;
  width: 35px;
  height: 35px;
  
  & img {
    max-width: 100%;
  }
`


class SearchForm extends Component {
  state = {
    searchText: '',
  }
  updateSearchText = ({target: {value}})=>{
    this.setState({
      searchText: value
    })
  }
  render() {
    const {onSubmit} = this.props;
    return (
      <FormWrapper onSubmit={onSubmit}>
        <SearchButton>
          <img src={searchIcon} alt=""/>
        </SearchButton>
        <StyledInput 
          name="searchInput"
          type="text" 
          placeholder="Search for Tasks"
          onChange={this.updateSearchText}
        />
      </FormWrapper>
    );
  }
}

export default SearchForm;