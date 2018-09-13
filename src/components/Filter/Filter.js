import React, { Component } from 'react';
import styled from "styled-components";
import { IconButton } from '../IconButton/IconButton';
const arrowUpDown = require('../../assets/images/up-down.svg')

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`

const FilterEl = styled.ul`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0;
  padding-left: 0;
  & li {
    display: flex;
    font-family: SFCompactText;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    color: #b8b8b8;
  
    button {
      padding: 10px;
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
      &:hover {
        color: #222;
        ::before {
          right: 0;
        }
      }
    }
 
  }
}
`

const sortSize = 40;

class Filter extends Component {
  render() {
    const {FBonClick, filterKeyList} = this.props;
    return (
      <Wrapper>
        <FilterEl>
          {filterKeyList.map((filterKey,i)=>(
            <li 
              key={i}
            >
              <button onClick={FBonClick}>{filterKey}</button>
            </li>
          ))} 
        </FilterEl>
        <IconButton iconSrc={arrowUpDown} size={sortSize}/>
      </Wrapper>
    );
  }
}

export default Filter;