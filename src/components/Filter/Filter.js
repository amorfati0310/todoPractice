import React, { Component } from 'react';
import styled from "styled-components";

const FilterEl = styled.ul`
  display: flex;
  align-items: center;
  height: 50px;
`


const FilterItem = styled.li`
  display: flex;
  font-family: SFCompactText;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;
  text-align: left;
  color: #b8b8b8;
`

const FilterButtonEl = ({buttonText}) => {
  return (
    <FilterItem>
      <button>{buttonText}</button>
    </FilterItem>
  );
};






class Filter extends Component {
  render() {
    return (
      <FilterEl>
        {this.props.filterList.map(({id, text})=>(
          <FilterButtonEl 
            key={id}
            buttonText={text}
          />
        ))}
      </FilterEl>
    );
  }
}

export default Filter;