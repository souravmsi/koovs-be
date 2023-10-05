import mongoose from "mongoose";

const newArrivalSchema = new mongoose.Schema({
  images: {
    type: Array,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
});

const NewArrival = mongoose.model("New-Arrival", newArrivalSchema);

export default NewArrival;
