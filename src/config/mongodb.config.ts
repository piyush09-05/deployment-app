import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGO_URI="mongodb://admin:admin123@localhost:27017/deployment-app?authSource=admin"
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
    process.exit(1); // stop the app
  }
};

export default connectDB;
