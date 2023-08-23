
export const loginAfterRedirect = (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/home`);
}
// to check user authencated or not 
export const protectedRoute = (req, res) => {
    res.send("protected route")
}
