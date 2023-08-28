
import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import authRoute from './Routes/authRoute.js';
import postRoute from './Routes/postRoute.js'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary';
import multer from 'multer';

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: 'uploads/' });


app.use('/uploads', express.static('uploads'));
app.use(express.json({ limit: '10mb' }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));



app.use('/quora/v1/auth', authRoute);
app.use('/quora/v1/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgMagenta.white);
});
