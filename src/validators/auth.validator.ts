import {z} from 'zod';

export const loginValidator = z.object({
    email: z.string().email({message: `Invalid email format`}),
    password: z.string().min(6, {message: `Password must be of 6-characters`})
})
export const registerValidator = z.object({
    email: z.string().email({message: `Invalid email format`}),
    password: z.string().min(6, {message: `Password must be of 6-characters`}),
    name: z.string({message: 'Name must a string'})
})