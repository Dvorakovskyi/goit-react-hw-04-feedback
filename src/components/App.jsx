import React from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { StyledWrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statistics = {
    good,
    neutral,
    bad,
  };

  const handleBtnClick = option => {
    option === 'good' && setGood(prevState => prevState + 1);

    option === 'neutral' && setNeutral(prevState => prevState + 1);

    option === 'bad' && setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    const values = Object.values(statistics);

    return values.reduce((acc, value) => {
      return value + acc;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() !== 0) {
      return Math.round((good / countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <StyledWrapper>
      <Section
        title="Please leave your feedback"
        children={
          <FeedbackOptions
            options={Object.keys(statistics)}
            onLeaveFeedback={handleBtnClick}
          />
        }
      />
      {totalFeedback <= 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section
          title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedbackPercentage}
            />
          }
        />
      )}
    </StyledWrapper>
  );
};

export default App;
