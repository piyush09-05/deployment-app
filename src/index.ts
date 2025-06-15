import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.get('/api/ping', (req,res) => {
    res.status(200).json({"message":"Backend is running"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Listening to PORT: ${PORT}`)
});