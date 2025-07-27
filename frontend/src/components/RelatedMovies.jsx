import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const RelatedMovies = ({ movieId }) => {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRelated = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL || ""
          }/api/movies/${movieId}/related`,
          { credentials: "include" }
        );
        const data = await res.json();
        if (res.ok) {
          setRelated(data);
        } else {
          setError(data.message || "Failed to fetch related movies");
        }
      } catch (err) {
        // Sample data fallback
        setRelated([
          {
            id: 3,
            title: "Interstellar",
            release_date: "2014-11-07",
            poster_path: "",
            overview: "A journey through space and time.",
          },
          {
            id: 4,
            title: "John Wick",
            release_date: "2014-10-24",
            poster_path: "",
            overview: "A retired hitman seeks vengeance.",
          },
        ]);
        setError("");
      }
      setLoading(false);
    };
    fetchRelated();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!related.length) return <div>No related movies found.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {related.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default RelatedMovies;
