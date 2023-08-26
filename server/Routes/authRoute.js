import express from 'express';
// import passport from '../Passport.js';
import { loginController, registerController } from '../controllers/authController.js';
import { requireSignIn } from './../midlewares/authenticate.js';


const router = express.Router();

// Register Routes  || POST Method
router.post('/register', registerController)

// Login Routes || POST Method
router.post('/login', loginController)

// Protected Routes || GET Method
router.get('/protected', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})


export default router;
