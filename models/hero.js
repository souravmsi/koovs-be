import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  xPos: {
    type: String,
    required: true,
  },
  yPos: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});

const Hero = mongoose.model("Hero", heroSchema);

export default Hero;