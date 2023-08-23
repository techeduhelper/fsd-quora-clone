
import passport from 'passport';

// Middleware that requires authentication
export const protectedRouteMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect(`${process.env.FRONTEND_URL}`);
    }
};



export const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect(`${process.env.FRONTEND_URL}/home`)
    } else {
        return next()
    }
}