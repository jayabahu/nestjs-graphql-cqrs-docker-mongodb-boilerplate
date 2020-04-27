require('dotenv').config();

export const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/dev';
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
