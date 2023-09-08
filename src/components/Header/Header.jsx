import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import logo from "../../images/Logo.png";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") alert("Please enter a valid movie or show!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header bg-yellow-500 h-20 flex items-center justify-between">
      <div className="logo ">
        <Link to="/">
          <img src={logo} className="h-36" />
        </Link>
      </div>
      <div className="search-bar w-1/2 flex justify-center">
        <form onSubmit={submitHandler} className="flex justify-center w-2/4">
          <input
            type="text"
            value={term}
            className="flex justify-center w-full shadow-md p-2 rounded-sm outline-none"
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="cursor-pointer p-2">
            <i className="fa fa-search fa-lg"></i>
          </button>
        </form>
      </div>
      <div className="user-profile">
        <i className="fa-regular fa-circle-user fa-2xl mr-5"></i>
      </div>
    </div>
  );
};

export default Header;
