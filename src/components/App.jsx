import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { StyledWrapper } from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce((acc, value) => {
      return value + acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <StyledWrapper>
        <Section
          title="Please leave your feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleBtnClick}
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
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positiveFeedback={positiveFeedbackPercentage}
              />
            }
          />
        )}
      </StyledWrapper>
    );
  }
}

export default App;
