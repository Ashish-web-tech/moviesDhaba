import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./Card/Card";

const API_KEY = "1a8811f3";
const BASE_URL = "https://www.omdbapi.com/";

const InputField = () => {
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);

  const fetchMovies = useCallback(async () => {
    if (!movie.trim()) return;

    try {
      const response = await axios.get(
        `${BASE_URL}?s=${movie}&apikey=${API_KEY}&page=${page}`
      );
      if (response.data.Response === "True") {
        setMovieList(response.data.Search || []);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
        setError("");
      } else {
        setMovieList([]);
        setError("No movies found. Try a different search.");
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
    }
  }, [movie, page]);

  useEffect(() => {
    if (click) {
      fetchMovies();
    }
  }, [page, fetchMovies]);

  return (
    <div className="flex flex-col w-full">
      <div
        className={` ${
          click ? "flex-row" : "flex-col"
        } mt-2 w-full mb-7 flex items-center gap-2`}
      >
        <input
          type="text"
          value={movie}
          onChange={(e) => {
            setMovie(e.target.value);
            setPage(1);
          }}
          className="border w-full justify-center outline-0 shadow-2xl border-white placeholder:bg-transparent px-3 py-2"
          placeholder="Search Your Favourite Movie"
        />
        <button
          onClick={() => {
            setClick(true);
            fetchMovies();
          }}
          className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 bg-transparent p-2">
        {movieList.map((movie, index) => (
          <Card
            key={movie.imdbID || index}
            imdb={movie.imdbID}
            year={movie.Year}
            img={movie.Poster}
            title={movie.Title}
            type={movie.Type}
          />
        ))}
      </div>

      {movieList.length > 0 && (
        <div className="flex justify-center mt-5 space-x-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 cursor-pointer bg-red-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 cursor-pointer bg-red-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      <div
        id="about"
        className={`mt-10 w-full ${
          click && "hidden"
        } flex justify-between gap-6 `}
      >
        <div className="md:w-1/2">
          <h1 className="lg:text-4xl xl:text-5xl text-3xl font-extrabold mb-3">ABOUT US</h1>
          <p className="mb-3 text-lg xl:text-3xl lg:text-2xl">
            Welcome to{" "}
            <span className="text-red-500 font-bold">MoviesDhaba</span>, your
            one-stop destination for all things movies! Whether you're a casual
            moviegoer or a hardcore cinephile, our platform lets you search for
            any movie and instantly access detailed information. Powered by the{" "}
            <span className="text-blue-500 font-bold">OMDb API</span>, we ensure
            you get accurate and up-to-date movie details at your fingertips.
          </p>
          <p className="text-lg xl:text-3xl lg:text-2xl">
            At MoviesDhaba, we aim to make movie discovery effortless and
            enjoyable. So, sit back, search for your favorite films, and explore
            the world of cinema like never before!
          </p>
        </div>
        <img src="/img/bg2.jpg" alt="" className="hidden md:block w-1/2" />
      </div>
    </div>
  );
};

export default InputField;
