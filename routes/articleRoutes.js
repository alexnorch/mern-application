import express from 'express'
import { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle } from '../controllers/articleController.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router()

router
    .route('/')
    .get(authenticate, getAllArticles)
    .post(authenticate, createArticle)

router
    .route('/:id')
    .get(authenticate, getArticle)
    .delete(authenticate, deleteArticle)
    .patch(authenticate, updateArticle)

export default router;