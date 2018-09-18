import React, { Component } from 'react';
import styled from "styled-components";


const searchIcon = require('../assets/images/search-icon.svg')
const cancelIcon = require('../assets/images/x-circle.svg')

const FormWrapper = styled.form `
   position: relative;
   box-sizing: border-box;
   margin-top: 16px;
   display: flex;
   align-items: center;
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
const AbsoluteButton = styled.button`
   position: absolute;
   & img {
    max-width: 100%;
  }
`

const SearchButton = styled(AbsoluteButton)`
  left: 0;
  width: 35px;
  height: 35px;
`

const CancelButton = styled(AbsoluteButton)`
  right: 0;
  width: 30px;
  height: 30px;
`


class SearchForm extends Component {
  state = {
    searchText: '',
  }
  handleSubmit = (e)=>{
    const {getSearchText} = this.props;
    e.preventDefault()
    const searchInput = e.target.elements.searchInput;
    let searchText = searchInput.value.trim()
    this.setState({
      searchText,
    })
    getSearchText(searchText)
    searchText = ""
  }
  updateSearchText = ({target: {value}})=>{
    const {getSearchText} = this.props;
    const filterText = value.trim()
    this.setState({
      searchText: filterText
    })
    getSearchText(filterText)
  }
  handleCancel(getSearchText){
    this.setState({
      searchText: ''
    })
    getSearchText('')
  }
  handleKeyPress(e, getSearchText){
    if(e.keyCode===27) this.handleCancel(getSearchText) 
  }
  render() {
    const {getSearchText} = this.props;
    return (
      <FormWrapper onSubmit={this.handleSubmit} >
        <SearchButton>
          <img src={searchIcon} alt=""/>
        </SearchButton>
        <StyledInput 
          name="searchInput"
          type="text" 
          placeholder="Search for Tasks"
          onChange={this.updateSearchText}
          value={this.state.searchText}
          onKeyUp={(e)=>this.handleKeyPress(e, getSearchText)}
        />
        {this.state.searchText&&
        <CancelButton onClick={()=>this.handleCancel(getSearchText)}>
          <img src={cancelIcon} alt=""/>
        </CancelButton>
        }
      </FormWrapper>
    );
  }
}

export default SearchForm;