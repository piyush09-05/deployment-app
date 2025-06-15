import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  console.log('✅ Ping hit');
  res.status(200).json({ message: 'Backend is running' });
});

app.listen(4000, '0.0.0.0', () => {
  console.log('🚀 Server running on http://localhost:4000');
});
