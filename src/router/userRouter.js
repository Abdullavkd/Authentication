import express from 'express';
import { registerController } from '../controllers/registerController.js';
import { loginController } from '../controllers/loginController.js';

export const userRouter = express.Router();

// userRouter.post("/register", registerController.register);
userRouter.post("/login", loginController.login)
userRouter.post("/register", registerController.register)
