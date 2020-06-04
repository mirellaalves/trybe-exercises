import categories from '../data';
import { SELECT_MOVIE } from '../actions/movieAction';

const INITIAL_STATE = {
  selectedMovie: {},
  selectedCategory: {},
  categories: [...categories]
}

function movieReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedCategory: action.category,
        selectedMovie: action.movie,
      }
    default:
      return state;
  }
}

export default movieReducer;
