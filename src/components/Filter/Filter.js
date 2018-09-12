import React, { Component } from 'react';
import styled from "styled-components";

const arrowUpDown = require('../../assets/images/up-down.svg')

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
`

const FilterEl = styled.ul`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0;
  padding-left: 0;
`

const FilterButtonStyle =`
  font-family: 'open-arrow', Helvetica, sans-serif;
  background: transparent;
  position: relative;
  padding: 10px;
  border: 0; 

`
  

const FilterItemEl = styled.li`
  display: flex;
  font-family: SFCompactText;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;
  text-align: left;
  color: #b8b8b8;
  
  button {
    ${FilterButtonStyle}
    height: 50px;
    margin-right: 15px;
    &::before {
    bottom: 0px;
    left: 0;
    right: 100%;
    background: #222;
    content: "";
    box-sizing: border-box;
    margin-left: 10px;
    margin-right: 10px;
   
    position: absolute;
    transition: all 0.2s ease-in-out;
    z-index: 100;
    height: 3px;
  }
  &:hover {
    color: #222;
    ::before {
      right: 0;
    }
  }
}
`

const IconButtonEl = styled.button`
  ${FilterButtonStyle}
  width: 50px;
  height: 50px;
  & img {
    max-width: 100%;
  }
`

const FilterItem = ({buttonText}) => {
  return (
    <FilterItemEl>
      <button>{buttonText}</button>
    </FilterItemEl>
  );
};

const IconButton = ({iconSrc})=>{
  return (
    <IconButtonEl>
      <img src={iconSrc} alt="sort button"/>
    </IconButtonEl>
  )
}


class Filter extends Component {
  render() {
    return (
      <Wrapper>
        <FilterEl>
          {this.props.filterList.map(({id, text})=>(
            <FilterItem 
              key={id}
              buttonText={text}
            />
          ))} 
        </FilterEl>
        <IconButton iconSrc={arrowUpDown}/>
      </Wrapper>
    );
  }
}

export default Filter;