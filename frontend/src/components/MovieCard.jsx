import React from 'react';

function MovieCard({ movie, onViewDetails }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-100 group"
    >
      {movie.posterUrl && (
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-56 object-cover group-hover:opacity-90 transition"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-purple-700 group-hover:text-purple-900 transition">{movie.title}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-semibold">{movie.genre}</span>
          <span className="text-gray-400 text-xs">{movie.year}</span>
        </div>
        {movie.description && (
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">{movie.description}</p>
        )}
        <button
          className="mt-3 w-full py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-lg font-semibold shadow hover:from-purple-600 hover:to-blue-500 transition"
          onClick={() => onViewDetails(movie)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
