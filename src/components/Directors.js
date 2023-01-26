import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map(director => {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        Movies:
        <ul>
          {director.movies.map(movie => {
            return (
              <li>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
