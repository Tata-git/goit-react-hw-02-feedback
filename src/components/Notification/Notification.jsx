import PropTypes from 'prop-types';
import { Message } from './notification.styled';

const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
