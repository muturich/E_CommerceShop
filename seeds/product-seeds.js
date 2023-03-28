const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'FootBall Sneakers',
    price: 23.98,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'AfroNation ThrowBack',
    price: 13.99,
    stock: 60,
    category_id: 3,
  },
  {
    product_name: 'Pollo Shirt',
    price: 39.99,
    stock: 32,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
