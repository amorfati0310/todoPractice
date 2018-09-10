import React from 'react';
import styled from "styled-components";

const backgroundImg = require('../../assets/images/header-bg.jpg')

const Wrapper = styled.div`
 position: relative;
 background-color: rgba(0, 0, 0, 0.8);
 overflow: hidden;
`

const Heading = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
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
        <BackgroundImg src={backgroundImg} alt="" />
        <NormalText>YESTERDAY</NormalText>
        <NormalText>YOU SAID</NormalText>
        <EdgeText>TOMORROW</EdgeText>
      </Heading>
    </Wrapper>
  );
};

export default Header;