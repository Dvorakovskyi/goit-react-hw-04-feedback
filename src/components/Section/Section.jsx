import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
