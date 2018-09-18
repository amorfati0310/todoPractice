import React, { Component } from 'react';
import styled, {css} from "styled-components";
import { IconButton } from './IconButton';
const arrowUpDown = require('../assets/images/up-down.svg')

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

`

const FilterListItem = styled.li`
    display: flex;
    font-family: SFCompactText;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
   
    & button {
      position: relative;
      padding: 10px;
      height: 50px;
      margin-right: 15px;
      color: #b8b8b8;
      ${props =>props.active && css`
        color: #000;
      `}
      &::before {
        bottom: 3px;
        left: 0;
        right: 100%;
        background: #000;
        content: "";
        box-sizing: content-box;
        position: absolute;
        transition: all 0.2s ease-in-out;
        z-index: 100;
        height: 2px;
      }
      &:hover {
        color: #000;
        ::before {
        right: 0;
        }
      }
    }
`

const sortSize = 40;

class FilterBar extends Component {
  state = {
    activeIdx:0, 
  }
  handleFilter = ({target})=> {
    const {FBonClick} = this.props;
    const filterText = {
      ALL: 0,
      TODO: 1,
      DONE: 2,
    };
    this.setState({
      activeIdx: filterText[target.innerText]
    })
    FBonClick(target.innerText);
  }
  render() {
    const { activeIdx } = this.state;
    const { filterKeyList, toggleSortTodoList} = this.props;
    return (
      <Wrapper>
        <FilterEl>
          {filterKeyList.map((filterKey,i)=>(
            <FilterListItem
              active={activeIdx===i} 
              key={i}
            >
              <button 
                onClick={this.handleFilter}>
                {filterKey}
              </button>
            </FilterListItem>
          ))} 
        </FilterEl>
        <IconButton onClick={toggleSortTodoList} iconSrc={arrowUpDown} size={sortSize}/>
      </Wrapper>
    );
  }
}

export default FilterBar;