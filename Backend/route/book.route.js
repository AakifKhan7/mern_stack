import express from 'express';
import { getBooks } from '../controller/book.controller.js';

const router = express.Router();

router.get('/', getBooks);

console.log("Book Router Loaded"); 

export default router;