import express from "express";
import dotenv from "dotenv";
import databaseConfig from './config/db.js'


dotenv.config();
databaseConfig();



const app = express();
const port = 8000;



app.listen(port, (err) => {
  if (err) console.log("Error in running the server", err);
  console.log("Server is running on port:", port);
});
