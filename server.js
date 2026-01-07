import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './src/router/userRouter.js';
import { errorHandlingMiddleware } from './src/middleware/errorHandlingMiddleware.js';

const app = express();
app.use(express.json());
app.use("/user", userRouter);

app.use(errorHandlingMiddleware.errorHandling)
const PORT = process.env.PORT;


const ConnectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/oneday");
    console.log("Connected");
}

ConnectDb();

app.listen(PORT, () => console.log("Running"+PORT));