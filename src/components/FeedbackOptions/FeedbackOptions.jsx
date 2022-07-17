import PropTypes from 'prop-types';
import { Button, SectionButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => { return (
  <SectionButton>
    {options.map(option => {
      return (
        <Button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      );
    })}
  </SectionButton>
);} 

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

//  Object.keys(this.state).map(key => <button key={key}>{key}</button>);
