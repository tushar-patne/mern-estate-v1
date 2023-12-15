import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);