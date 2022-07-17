import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // -----------onLeaveFeedback----------------
  updateOnLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  //----------countTotalFeedback-------------
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, currentValue) => {
      previousValue += currentValue;
      return previousValue;
    }, 0);
  };

  //-----  підрахувати відсоток позитивних відгуків -------------------
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good * 100) / total);
  };

  //-----------------------------------
  render() {
    const { good, neutral, bad } = this.state;
    const objectKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKeys}
            onLeaveFeedback={this.updateOnLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
//------------------------------------
//  {
//    Object.keys(this.state).map(key => <button key={key}>{key}</button>);
//  }
