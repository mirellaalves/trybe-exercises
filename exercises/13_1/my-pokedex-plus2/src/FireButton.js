import React from 'react';

class FireButton extends React.Component {
  render() {
    return (
      <button className='type-btn' onClick={() => { this.props.handleClick(this.props.pokemon); }}>Fire</button>
    )
  }
}

export default FireButton;
