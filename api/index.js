import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`connected to MongoDB`);
    })
    .catch((error) => {
        console.log(`Something went wrong while connecting to database: ${error}`);
    });

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});