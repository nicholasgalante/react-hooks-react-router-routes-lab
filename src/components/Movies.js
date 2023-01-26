import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = movies.map(movie => {
    return (
      <div>
        <h2>Name: {movie.title}</h2>
        Time: {movie.time}
        <div>
          Genres:
          <ul>
            {movie.genres.map(genre=>{
              return(
                <li>{genre}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
