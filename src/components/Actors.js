import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map(actor => {
    return (
      <div key={actor}>
        <h2>Name:  {actor.name}</h2>
        Movies:
        <ul>
          {actor.movies.map(movie =>{
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
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
}

export default Actors;
