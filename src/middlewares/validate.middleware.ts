import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (schemea: ZodSchema<any>) => (req:Request, res:Response, next: NextFunction) => {
    const result = schemea.safeParse(req.body);
    if(!result.success){
         res.status(400).json({
            message: 'Validation error',
            errors: result.error
        })
        return;
    }
    req.body = result.data;
    next();
}