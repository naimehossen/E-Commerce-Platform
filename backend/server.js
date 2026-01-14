import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
//import authRoutes from './routes/auth.js';
//import orderRoutes from './routes/orders.js';
import adminRoutes from './routes/admin.js'; // Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);
//app.use('/api/auth', authRoutes);
//app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes); // Add this line

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'ই-কমার্স API কাজ করছে!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});