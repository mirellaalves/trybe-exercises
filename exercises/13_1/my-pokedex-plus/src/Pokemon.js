import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <h3> {name} </h3>
          <p> {type} </p>
          <p> Average Weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
        </div>        
        <img src={image} className="Pokemon-image" alt={name} />
      </div>
    );
  }
}

export default Pokemon;
