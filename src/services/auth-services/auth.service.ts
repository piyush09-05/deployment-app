import User from "../../models/user.model.ts";
import bcrypt from 'bcrypt';
import generateToken from "../../utils/jwt.utils.ts";


const authService = {
    registerUser : async (email:string, password: string, name: string) => {
        try {  
            const existing = await User.findOne({ email });
            if (existing) {
                return { message: 'User already exists' };
            }
            const hashedPassword = await bcrypt.hash(password, 10);
                      
            const user = await User.create({ name, email, password:hashedPassword });
            const token = generateToken(user.userId);
            
            return {
                message: 'User registered successfully',
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    }
                }
        } catch (error) {
            throw new Error(`Error while registering user ${error}`)
        }
    },
    login : async(email:string, password: string) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
              return { message: 'User not found' };
            }
      
     
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
               return { message: 'Invalid password' };
            }
      

            const token = generateToken(user.userId);
      
             return{
              message: 'User logged in successfully',
              token,
              user: {
                id: user.userId,
                name: user.name,
                email: user.email,
              },
            }
        } catch (error) {
            throw new Error(`Error while logging in: ${error}`)
        }
    }
}
export default authService