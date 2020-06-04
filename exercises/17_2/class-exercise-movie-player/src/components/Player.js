import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
        <h2>{this.props.movie.title}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.movieReducer.selectedCategory,
    movie: state.movieReducer.selectedMovie,
  }
}

export default connect(mapStateToProps)(Player);