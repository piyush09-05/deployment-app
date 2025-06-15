import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.ts';
import connectDB from './config/mongodb.config.ts';

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req,res) => {
    console.log('Ping API');
     res.status(200).json({"message":"Backend is running"});
});

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App started Listening to PORT: ${PORT}`)
});