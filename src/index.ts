import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth.routes';

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/api/ping', (_req,res) => {
    console.log('Ping API');
     res.status(200).json({"message":"Backend is running"});
});

// app.use('/auth', authRouter); 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App started Listening to PORT: ${PORT}`)
});