import { Request, Response } from "express";

const authController = {

    registerUser: async(req: Request, res: Response) => {
        try {
            //TODO add user to mongoDb
            console.log('resgitering user');
            res.status(200)
            .json({
                "message":"User registered successfully",
                "token":"token"
            });
        } catch (error) {
            throw new Error(`Error while registering new user ${error}`);
        }
    },
    login: async(req: Request, res: Response) => {
        try {
            //TODO add user to mongoDb
            console.log('logging in user');
            res.status(200)
            .json({
                "message":"User logged in successfully",
                "token":"token"
            });
        } catch (error) {
            throw new Error(`Error while registering new user ${error}`);
        }
    }
}
export default authController;