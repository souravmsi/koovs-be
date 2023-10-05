import mongoose from "mongoose";

const menCarouselSchema = new mongoose.Schema({
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

const MenCarousel = mongoose.model("MenCarousel", menCarouselSchema);

export default MenCarousel;
