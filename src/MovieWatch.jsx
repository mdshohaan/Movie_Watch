import { useState } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";

const MovieWatch = () => {
  const [movies, setMovies] = useState([]);
  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="flex flex-col w-1/2 m-3 items-center justify-center p-6 bg-slate-900 text-white rounded-lg shadow-lg">
      <Heading />
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default MovieWatch;
