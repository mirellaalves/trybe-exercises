import React from 'react';
import { connect } from 'react-redux';
import * as MovieActions from '../actions/movieAction';

function Sidebar ({ categories, pickMovie }) {
  return (
    <aside>
      {
        categories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {
                category.movies.map(movie => (
                  <li key={movie.id}>
                    {movie.title} - released in {movie.released}
                    <button type="button" onClick={() => pickMovie(category, movie)}>
                      Select
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </aside>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.movieReducer.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pickMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
