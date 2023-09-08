import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-wrapper shadow-lg mb-10 rounded-md  hover:scale-105 hover:transition-all hover:duration-100 ">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} className="w-full h-96" alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info rounded-md p-3">
              <h4 className="text-slate-700">{data.Title}</h4>
              <p className="text-slate-700">{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
