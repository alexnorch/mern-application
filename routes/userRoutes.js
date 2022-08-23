import express from 'express'
import { loginUser, registerUser, updateUser, deleteUser, getAllUsers, getUser, addCategory } from '../controllers/userController.js';
import restrictTo from '../middlewares/restrict.js';
import authenticate from '../middlewares/authenticate.js';
import multer from 'multer'
import AppError from '../utils/AppError.js';

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img')
    },
    filename: (req, file, cb) => {
        const { userId } = req.user
        const ext = file.mimetype.split('/')[1]
        
        cb(null, `${userId}_${Date.now()}.${ext}`)
    }
})

const multerFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('image')) {
        return cb(new AppError("Only images are accepted"), false)
    }
    
    cb(null, true)
}

const upload = multer({ 
    storage: multerStorage, 
    fileFilter: multerFilter })

const router = express.Router()

router
    .route('/register')
    .post(registerUser)

router
    .route('/login')
    .post(loginUser)

router
    .route('/')
    .get(authenticate, restrictTo('admin', 'moderator', 'user'), getAllUsers)

router
    .route('/:id')
    .patch(authenticate, upload.single('photo'), updateUser)
    .get(getUser)
    .delete(deleteUser)

router
    .route('/:id/addCategory')
    .patch(addCategory)

export default router;