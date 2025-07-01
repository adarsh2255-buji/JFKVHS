import express from 'express';
const router = express.Router();
import multer from 'multer';
import path from 'path';

import { createStudent } from '../controller/studentController.js';
import { loginStudent } from '../controller/studentController.js';

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the original file name
    }
});
const upload = multer({ storage });

//create student route
router.post('/create', upload.single('photo'), createStudent);
router.post('/login', loginStudent);

export default router;
