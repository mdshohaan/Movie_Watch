import { useState } from "react";

function MovieForm({ addMovie }) {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({ ...movieData, [key]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieData);
    if (!movieData?.title.trim() || movieData?.ott.trim()) return;
    addMovie(movieData);
    setMovieData({ ...movieData, title: "", ott: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 mb-8 w-full"
    >
      <input
        type="text"
        placeholder="Enter Movie name"
        name="title"
        onChange={handleChange}
        value={movieData?.title}
        className="flex-1 p-2 border border-gray-700 rounded text-white"
      />
      <select
        name="ott"
        onChange={handleChange}
        value={movieData?.ott}
        className="border border-gray-300 rounded-md"
      >
        <option value="">Select an OTT</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Hotstar">Hotstar</option>
        <option value="Bongo">Bongo</option>
        <option value="SonyLive">SonyLive</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default MovieForm;
