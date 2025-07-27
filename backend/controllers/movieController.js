export const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Movie not found" });
  }
};

export const getRelatedMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(404).json({ message: "Related movies not found" });
  }
};
import axios from "axios";

export const searchMovies = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
