import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dBconnection} from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
const app = express();
dotenv.config({ path: './config/config.env' });

// Configure CORS
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true,
};

app.use(cors(corsOptions)); // Use the correct CORS configuration

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter); // Use the ReservationRouter for the /api/v1/reservations route
dBconnection();
app.use(errorMiddleware); // Use the errorMiddleware function

export default app;
