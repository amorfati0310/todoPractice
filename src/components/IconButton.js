import React from 'react';
import styled, {css} from "styled-components";

const defaultSize = 50

const IconButtonEl = styled.button` 
  width: ${props => props.size+'px'};
  height: ${props => props.size+'px'};
  ${props =>props.circle && css`
      border-radius: 50%;
      border: 1px solid #eee
  `}
  ${props =>props.completed && css`
      background: ${props.background};
  `}
  & img {
    max-width: 100%;
  }
`;

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
  /* &:hover {
    ${props =>props.animation && css`
      animation: ${props.anmiation} 1s linear ease-in-out;
  `} */
  }
`




const IconButton = ({iconSrc, onClick, size=defaultSize, style, background="transparent", circle=false, completed}) => {
  return (
    <IconButtonEl 
      completed={completed}
      onClick={onClick} 
      size={size}
      stlye={style}
      background={background}
      circle={circle}
    >
      <img src={iconSrc} alt=""/>
    </IconButtonEl>
  );
};
const FloatButton = ({iconSrc, onClick, size=defaultSize, }) => {
  return (
    <FloatButtonEl onClick={onClick} size={size} >
      <img src={iconSrc} alt=""/>
    </FloatButtonEl>
  );
};

export {
  IconButton,
  FloatButton,
};