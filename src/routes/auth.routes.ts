import express from 'express';
import { validate } from '../middlewares/validate.middleware.ts';
import { loginValidator, registerValidator } from '../validators/auth.validator.ts';
import authController from '../controllers/auth.controller.ts';

const authRouter =  express.Router();

authRouter.post('/register', validate(registerValidator), authController.registerUser);

authRouter.post('/login', validate(loginValidator), authController.login)

export default authRouter;