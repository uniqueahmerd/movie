import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import RelatedMovies from "../components/RelatedMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL || ""}/api/movies/${id}`,
          { credentials: "include" }
        );
        const data = await res.json();
        if (res.ok) {
          setMovie(data);
        } else {
          setError(data.message || "Failed to fetch movie");
        }
      } catch (err) {
        // Sample data fallback
        setMovie({
          id,
          title: id === "1" ? "Inception" : "The Matrix",
          release_date: id === "1" ? "2010-07-16" : "1999-03-31",
          poster_path: "",
          overview:
            id === "1"
              ? "A mind-bending thriller."
              : "A hacker discovers reality is a simulation.",
        });
        setError("");
      }
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  if (!movie) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.title}
          className="w-72 h-96 object-cover rounded shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="mb-2 text-gray-600">{movie.release_date}</p>
          <p className="mb-4">{movie.overview}</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-10 mb-4">Related Movies</h3>
      <RelatedMovies movieId={id} />
    </div>
  );
};

export default MovieDetails;
