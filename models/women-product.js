import mongoose from "mongoose";

const womenCarouselSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const WomenCarouel = mongoose.model("WomenCarouel", womenCarouselSchema);

export default WomenCarouel;
