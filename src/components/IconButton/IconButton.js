import React from 'react';
import styled from "styled-components";

const defaultSize = 50

// question 
// const IconButtonEl = styled.button`
//   width: ${({width}) => width ? width: defaultWidth};
//   height: ${({height}) => height ? height:defaultWidth};
//    width: ${({width=defulatWidth}) => width ? width: defaultWidth};
//   height: ${({height}) => height ? height:defaultWidth};
// `

const IconButtonEl = styled.button` 
  width: ${props => props.size+'px'};
  height: ${props => props.size+'px'};
  & img {
    max-width: 100%;
  }
 `

const FloatButtonEl  = styled(IconButtonEl)`
  position: fixed;
  border-radius: 50%;
  padding: 0;
  bottom: 20px;
  right: 20px;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`
const AddButton = styled.button`

`

const IconButton = ({iconSrc, onClick, size=defaultSize}) => {
  return (
    <IconButtonEl onClick={onClick} size={size}>
      <img src={iconSrc} alt=""/>
    </IconButtonEl>
  );
};
const FloatButton = ({iconSrc, onClick, size=defaultSize}) => {
  return (
    <FloatButtonEl onClick={onClick} size={size}>
      <img src={iconSrc} alt=""/>
    </FloatButtonEl>
  );
};

// IconButton.defulatProps = {
//   size: 50,
// }

export {
  IconButton,
  FloatButton,
};