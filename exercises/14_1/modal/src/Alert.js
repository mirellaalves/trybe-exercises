import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, contentTitle, content } = props;
  setTimeout(() => hideComponent(), 3000);
  return (
    <div className='Alert'>
      <h1>{contentTitle}</h1>
      <p>{content}</p>
    </div>
  )
}

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  contentTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Alert;
