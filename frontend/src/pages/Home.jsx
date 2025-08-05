import React, { useEffect, useState } from 'react';
import axios from 'axios';
const MovieCard = React.lazy(() => import('../components/MovieCard'));
const MovieModal = React.lazy(() => import('../components/MovieModal'));

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/movies`);
        setMovies(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      <span className="ml-4 text-lg text-gray-600">Loading movies...</span>
    </div>
  );
  if (error) return <div className="text-center text-red-500 font-semibold text-lg">{error}</div>;
  if (!movies.length) return <div className="text-center text-gray-500 mt-10">No movies found.</div>;

  return (
    <React.Suspense fallback={<div className='text-center'>Loading...</div>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onViewDetails={setSelectedMovie} />
        ))}
      </div>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </React.Suspense>
  );
}

export default Home;
