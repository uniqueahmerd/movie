import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const fetchMovies = async (search = "") => {
    setLoading(true);
    setError("");
    try {
      let url = `${
        import.meta.env.VITE_BACKEND_URL || ""
      }/api/movies/search?query=${encodeURIComponent(search)}`;
      if (!search)
        url = `${
          import.meta.env.VITE_BACKEND_URL || ""
        }/api/movies/search?query=popular`;
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      if (res.ok) {
        setMovies(shuffleArray(data));
      } else {
        setError(data.message || "Search failed");
      }
    } catch (err) {
      setMovies(
        shuffleArray([
          {
            id: 1,
            title: "Inception",
            release_date: "2010-07-16",
            poster_path: "",
            overview: "A mind-bending thriller.",
          },
          {
            id: 2,
            title: "The Matrix",
            release_date: "1999-03-31",
            poster_path: "",
            overview: "A hacker discovers reality is a simulation.",
          },
        ])
      );
      setError("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full max-w-md p-2 border rounded-l"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {movies.length === 0 && !loading && !error && (
        <div className="text-center text-gray-500">No results found.</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
