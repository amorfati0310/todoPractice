import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h1`
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
`;

const Header = ({ title }) => {
  return (
    <header>
      <Heading>{title}</Heading>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
