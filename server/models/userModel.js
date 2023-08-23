import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    googleId: String,
    githubId: String,
    displayName: String,
    emails: String,
    picture: String,
    accessToken: String,
    username: String,
});

export default mongoose.model('user', userSchema);
