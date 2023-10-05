import express from "express";
import dotenv from "dotenv";
import databaseConfig from './config/db.js'

import { json } from "express";
import authRouter from './routes/api/auth/index.js';
import heroRouter from './routes/api/hero-component.js';
import menRouter from './routes/api/men-products.js'
import womenRouter from './routes/api/women-products.js'
import NewArrivalRouter from './routes/api/new-arrivals.js'

dotenv.config();
databaseConfig();



const app = express();

//Middlewares
app.use(json());



app.use('/api', authRouter);
app.use('/api', heroRouter);
app.use('/api', menRouter);
app.use('/api', womenRouter);
app.use('/api', NewArrivalRouter);



app.listen(process.env.PORT, (err) => {
  if (err) console.log("Error in running the server", err);
  console.log("Server is running sucessfully!");
});
