import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  movieId: String,
  title: String,
  review: String,
  rating: Number,
});

export default mongoose.model("Movie", movieSchema);
