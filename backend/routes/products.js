import express from 'express';
import {
  //getProducts,
  //getProduct,
 //createProduct,
  //updateProduct,
  //deleteProduct,
  //bulkCreateProducts
} from '../controllers/productController.js';
//import { authenticate, adminOnly } from '../middleware/auth.js';
//import upload from '../middleware/upload.js';

const router = express.Router();

// Public routes
//router.get('/', getProducts);
//router.get('/:id', getProduct);

// Admin routes
//router.post('/', authenticate, adminOnly, upload.single('image'), createProduct);
//router.post('/bulk', authenticate, adminOnly, bulkCreateProducts);
//router.put('/:id', authenticate, adminOnly, upload.single('image'), updateProduct);
//router.delete('/:id', authenticate, adminOnly, deleteProduct);

export default router;