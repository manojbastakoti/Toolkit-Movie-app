import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAsyncMovieorShowDetail,
  getSelectMovieOrShow,
  removeSelectedMovieorShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  console.log(imdbID);
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieorShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, imdbID]);
  return Object.keys(data).length === 0 ? (
    <div className="text-center">...Loading</div>
  ) : (
    <>
      <div className="movie-section flex flex-col-2 max-w-screen-2xl mx-auto mt-10 mb-10">
        <div className="section-left">
          <div className="movie-title text-2xl mb-2 font-extrabold">
            {data.Title}
          </div>
          <div className="movie-rating flex flex-col ">
            <span>
              IMDB rating
              <i className="fa-solid fa-star pl-2 text-yellow-600">
                :{data.imdbRating}
              </i>
            </span>
            <span>
              IMDB votes
              <i className="fa-solid fa-thumbs-up pl-2 text-blue-600">
                :{data.imdbVotes}
              </i>
            </span>
            <span>
              Runtime
              <i className="fa-solid fa-film pl-2">:{data.Runtime}</i>
            </span>
            <span>
              Year
              <i className="fa-solid fa-calendar pl-2">:{data.Year}</i>
            </span>
          </div>
          <div className="movie-plot mt-5 font-semibold">{data.Plot}</div>
          <div className="movie-info flex flex-col">
            <span>
              Director:<span className="pl-2">{data.Director}</span>
            </span>
            <span>
              Stars: <span className="pl-2">{data.Actors}</span>
            </span>

            <span>
              Genere:<span className="pl-2">{data.Genre}</span>
            </span>

            <span>
              Language:<span className="pl-2">{data.Language}</span>
            </span>

            <span>
              Awards: <span className="pl-2">{data.Awards}</span>
            </span>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
