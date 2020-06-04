export const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(category, movie) {
  return {
    type: SELECT_MOVIE,
    category,
    movie,
  }
}
