import { useState } from "react";

function MovieForm() {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Movie name"
        name="title"
        value={movieData?.title}
        className="flex-1 p-2 border border-gray-700 rounded text-white"
      />
      <select
        name="ott"
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
    </form>
  );
}

export default MovieForm;
