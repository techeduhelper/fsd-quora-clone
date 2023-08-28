import postModel from "../models/postModel.js";
import cloudinary from 'cloudinary';


export const createPostController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'quora/',
        });

        const { title, description } = req.body;
        if (!title || !description) throw new Error('Please fill all fields');

        const newPost = await postModel.create({
            title,
            description,
            photo: result.url,
            author: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: 'Your post has been created',
            post: newPost,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in creating post',
            error: error.message,
        });
    }
};


// get all place anyone can see
export const getAllPostController = async (req, res) => {
    try {
        const allPost = await postModel.find().sort({ createdAt: -1 }).populate('author', 'name photo');;
        res.status(200).json({
            success: true,
            message: "All places fetched successfully",
            post: allPost,
        });
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: "something went wrong",
            error
        })
    }
}

