import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtnList, StyledBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledBtnList>
      {options.map(option => {
        return (
          <li option={option} key={option}>
            <StyledBtn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {toUpperCase(option)}
            </StyledBtn>
          </li>
        );
      })}
    </StyledBtnList>
  );
};

function toUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
