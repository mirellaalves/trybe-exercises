import React from 'react';

class NextButton extends React.Component {
	render() {
		return (
			<button className='next-btn' onClick={() => { this.props.handleClick(this.props.pokemon); }}>Next Pokémon</button>
		)
	}
}

export default NextButton;
