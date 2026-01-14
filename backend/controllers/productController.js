import Product from '../models/Product.js';
import upload from '../middleware/upload.js';

// ... existing code ...

// Create product with image upload
export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    
    // If image is uploaded
    if (req.file) {
      productData.image = `/uploads/${req.file.filename}`;
    }

    const product = new Product(productData);
    await product.save();
    
    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error: error.message });
  }
};

// Bulk create products
export const bulkCreateProducts = async (req, res) => {
  try {
    const products = req.body;
    const createdProducts = await Product.insertMany(products);
    
    res.status(201).json({
      message: 'Products created successfully',
      products: createdProducts
    });
  } catch (error) {
    res.status(400).json({ message: 'Error creating products', error: error.message });
  }
};

// Update product with image
export const updateProduct = async (req, res) => {
  try {
    const updateData = req.body;
    
    // If new image is uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json({
      message: 'Product updated successfully',
      product
    });
  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error: error.message });
  }
};