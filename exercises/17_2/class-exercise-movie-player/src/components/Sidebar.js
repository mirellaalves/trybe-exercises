import React from 'react';

function Sidebar ({ categories }) {
  return (
    <aside>
      {
        categories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {
                category.movies.map(movie => (
                  <li key={movie.id}>{movie.title} - released in {movie.released}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </aside>
  );
}

export default Sidebar;
