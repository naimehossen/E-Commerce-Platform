import express from 'express';
import {
  getDashboardStats,
  getUsers,
  getOrders,
  updateOrderStatus,
  getSalesAnalytics
} from '../controllers/adminController.js';
import { authenticate, adminOnly } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Admin dashboard routes
router.get('/dashboard/stats', authenticate, adminOnly, getDashboardStats);
router.get('/dashboard/analytics', authenticate, adminOnly, getSalesAnalytics);

// User management
router.get('/users', authenticate, adminOnly, getUsers);

// Order management
router.get('/orders', authenticate, adminOnly, getOrders);
router.put('/orders/:orderId/status', authenticate, adminOnly, updateOrderStatus);

// Product management (already in products.js, but adding bulk operations here)
router.post('/products/bulk', authenticate, adminOnly, async (req, res) => {
  try {
    const products = req.body;
    const createdProducts = await Product.insertMany(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(400).json({ message: 'Error creating products', error: error.message });
  }
});

export default router;