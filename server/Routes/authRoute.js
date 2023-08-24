import express from 'express';
// import passport from '../Passport.js';
import { loginController, protectedRoute, registerController } from '../controllers/authController.js';
import { requireSignIn } from './../midlewares/authenticate.js';


const router = express.Router();

// // Google authentication routes
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), loginAfterRedirect);

// // GitHub authentication routes
// router.get('/github', passport.authenticate('github'));
// router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }), loginAfterRedirect);

// // for logout 
// router.get('/logout', (req, res) => {
//     req.logout(function (err) {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.redirect(`${process.env.FRONTEND_URL}`);
//     });
// });

// Register Routes  || POST Method
router.post('/register', registerController)

// Login Routes || POST Method
router.post('/login', loginController)

// Protected Routes || GET Method
router.get('/protected', requireSignIn, protectedRoute)


export default router;
