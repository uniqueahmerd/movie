import express from "express";
import {
  searchMovies,
  getMovieDetails,
  getRelatedMovies,
  getAllMovies,
} from "../controllers/movieController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
// Public route to get all movies
router.get("/", getAllMovies);

router.get("/search", protect, searchMovies);
router.get("/:id", protect, getMovieDetails);
router.get("/:id/related", protect, getRelatedMovies);

export default router;
