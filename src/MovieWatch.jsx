import Heading from "./Heading";
import MovieForm from "./MovieForm";

const MovieWatch = () => {
  return (
    <div className="flex flex-col w-1/2 m-3 items-center justify-center p-6 bg-slate-900 text-white rounded-lg shadow-lg">
      {" "}
      <Heading />
      <MovieForm />
    </div>
  );
};

export default MovieWatch;
