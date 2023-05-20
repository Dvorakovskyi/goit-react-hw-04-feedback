import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total = 0, positiveFeedback }) => {
  return (
    <ul>
      <StyledStatisticsItem>Good: {good}</StyledStatisticsItem>
      <StyledStatisticsItem>Neutral: {neutral}</StyledStatisticsItem>
      <StyledStatisticsItem>Bad: {bad}</StyledStatisticsItem>
      <StyledStatisticsItem>Total: {total}</StyledStatisticsItem>
      <StyledStatisticsItem>Positive feedback: {positiveFeedback}%</StyledStatisticsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
