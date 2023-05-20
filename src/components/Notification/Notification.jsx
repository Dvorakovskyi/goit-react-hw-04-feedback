import React from 'react';
import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';

const Notification = ({message}) => {
  return (
    <section>
      <StyledMessage>{message}</StyledMessage>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
