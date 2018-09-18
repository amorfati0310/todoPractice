import React from 'react';
import styled from "styled-components";

const backgroundImg = require('../assets/images/header-bg.jpg')

const Wrapper = styled.div`
 position: relative;
 background-color: rgba(0, 0, 0, 0.8);
 overflow: hidden;
 box-sizing: border-box;
 width: 100%;
 height: 140px;
 
`

const Heading = styled.h1`
  position: absolute;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 25px;
`
const NormalText = styled.span`
 color: #fff;
 font-size: 28px;
 line-height: 34px;
`

const EdgeText = styled(NormalText)`
 color: #00ffe2;
`

const BackgroundImg = styled.img`
  max-width: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -1;
`

const Header = () => {
  return (
    <Wrapper>
      <Heading>
        <NormalText>YESTERDAY</NormalText>
        <NormalText>YOU SAID</NormalText>
        <EdgeText>TOMORROW</EdgeText>
      </Heading>
      <BackgroundImg src={backgroundImg} alt="" />
    </Wrapper>
  );
};

export default Header;