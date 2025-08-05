import React from 'react';

function MovieModal({ movie, onClose }) {
  if (!movie) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-purple-600 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {movie.posterUrl && (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
        )}
        <h2 className="text-3xl font-extrabold text-purple-700 mb-2">{movie.title}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-semibold">{movie.genre}</span>
          <span className="text-gray-400 text-xs">{movie.year}</span>
        </div>
        {movie.description && (
          <p className="text-gray-700 mb-2">{movie.description}</p>
        )}
        {movie.director && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Director:</span> {movie.director}</p>
        )}
        {movie.cast && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Cast:</span> {movie.cast.join(', ')}</p>
        )}
        {movie.duration && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Duration:</span> {movie.duration} min</p>
        )}
        {movie.rating && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Rating:</span> {movie.rating}/10</p>
        )}
        {movie.language && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Language:</span> {movie.language}</p>
        )}
        {movie.releaseDate && (
          <p className="text-gray-500 text-sm mb-1"><span className="font-semibold">Release Date:</span> {new Date(movie.releaseDate).toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
