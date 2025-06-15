import express from 'express';
import { validate } from '../middlewares/validate.middleware';
import { loginValidator, registerValidator } from '../validators/auth.validator';
import authController from '../controllers/auth.controller';

const authRouter =  express.Router();

authRouter.post('/register', validate(registerValidator), authController.registerUser);

authRouter.post('/login', validate(loginValidator), authController.login)

export default authRouter;