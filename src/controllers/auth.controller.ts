import { Request, Response } from "express";
import authService from "../services/auth-services/auth.service.ts";

const authController = {

    registerUser: async(req: Request, res: Response) => {
        try {
            console.log('resgitering user');
            const { name, email, password } = req.body;

            const response = await authService.registerUser(email, password, name);

             res.status(201).json(response);
        } catch (error) {
            throw new Error(`Error while registering new user ${error}`);
        }
    },
    login: async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const response = await authService.login(email, password);
             res.status(200).json(response);
        } catch (error) {
            console.error('Login error:', error);
             res.status(500).json({ message: 'Internal server error' });
        }
    }
}
export default authController;