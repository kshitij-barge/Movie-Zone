import React, { useState } from "react";
import { movies } from "./data";
import "./Movies.css";

const Movies = () => {
  const [movieList, setmovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setmovieList(movies.filter((data) => data.category === cat));
  };

  return (
    <>
      <div className="movies-container">
        <div className="button-group">
          <button onClick={() => setmovieList(movies)} type="button" className="btn btn-outline-primary">All</button>
          <button onClick={() => filterByCategory("Action")} type="button" className="btn btn-outline-secondary">Action</button>
          <button onClick={() => filterByCategory("Thriller")} type="button" className="btn btn-outline-success">Thriller</button>
          <button onClick={() => filterByCategory("Animation")} type="button" className="btn btn-outline-danger">Animation</button>
          <button onClick={() => filterByCategory("Horror")} type="button" className="btn btn-outline-warning">Horror</button>
          <button onClick={() => filterByCategory("Drama")} type="button" className="btn btn-outline-info">Drama</button>
          <button onClick={() => filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light">Sci-Fi</button>
        </div>
      </div>

      <div className="movies-wrapper">
        {movieList.map((data) => (
          <div key={data.id} className="movie-card">
            <img src={data.poster_path} alt={data.title} className="movie-poster" />
            <h5 className="movie-title">{data.title}</h5>
            <p className="movie-date">{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
