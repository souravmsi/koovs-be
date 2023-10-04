import mongoose from "mongoose";

const init = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Database is connected sucessfully!!!!");
    })
    .catch((err) => {
      console.log("Error while connected to database", err);
    });
};

export default init;
