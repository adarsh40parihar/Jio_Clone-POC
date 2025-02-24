import React from "react";

async function fetchMovie(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

async function Movie(props) {
  const movieId = props.params.movieId;
  const movieData = await fetchMovie(movieId);

  return (
    <>
      <p>-----------------------</p>
      <h1>Movie Data Page for : {movieId}</h1>
      <h2>Movie Name : {movieData.title}</h2>
      <p>Movie Description: {movieData.description}</p>
    </>
  );
}

export default Movie;
