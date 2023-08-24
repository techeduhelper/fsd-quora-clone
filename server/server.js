// import session from 'express-session';
// import passport from './Passport.js'
import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import authRoute from './Routes/authRoute.js';
import dotenv from 'dotenv'

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
// app.use(session({
//     secret: 'quoraclone',
//     resave: false,
//     saveUninitialized: false,
// }));
// app.use(passport.initialize());
// app.use(passport.session());



app.use('/quora/v1/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgMagenta.white);
});
