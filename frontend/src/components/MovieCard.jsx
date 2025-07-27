import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "/no-image.png"
        }
        alt={movie.title}
        className="w-full h-72 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold mb-2 text-center">{movie.title}</h3>
      <p className="text-gray-600 text-sm mb-2 text-center">
        {movie.release_date}
      </p>
      <Link
        to={`/movie/${movie.id}`}
        className="text-blue-600 hover:underline mt-auto"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
