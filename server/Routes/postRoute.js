import express from "express";
import multer from 'multer';
import { createPostController, getAllPostController } from "../controllers/postController.js";
import { requireSignIn } from "../midlewares/authenticate.js";


const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Create Post ||POST Method
router.post("/create-post", requireSignIn, upload.single('photo'), createPostController)

// Gel All Post See Anyone ||GET Method
router.get('/all-post', getAllPostController);


export default router;