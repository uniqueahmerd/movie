import express from "express";
import {
  searchMovies,
  getMovieDetails,
  getRelatedMovies,
} from "../controllers/movieController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/search", protect, searchMovies);
router.get("/:id", protect, getMovieDetails);
router.get("/:id/related", protect, getRelatedMovies);

export default router;
