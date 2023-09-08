import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  console.log(movies);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  console.log(renderMovies);

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list mt-10">
        <h2 className="px-16 text-4xl font-bold mb-5 ">Movies</h2>
        <div className="movie-container grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  gap-5 px-16">
          {renderMovies}
        </div>
      </div>

      <div className="movie-list mt-10">
        <h2 className="px-16 text-4xl font-bold mb-5 ">Shows</h2>
        <div className="movie-container grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  gap-5 px-16">
          {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
