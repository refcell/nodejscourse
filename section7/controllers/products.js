const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  s.render('add-product', {
  pageTitle: 'Add Product',
    : '/admin/add-product',
    sCSS: true,
    uctCSS: true,
    veAddProduct: true
    
    
  
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  s.redirect('/');
    
    
    getProducts = (req, res, next) => {
    t.fetchAll(products => {
    render('shop', {
    prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
  });
};
