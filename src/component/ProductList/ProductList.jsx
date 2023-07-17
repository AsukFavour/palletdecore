import React, { useState } from 'react';
import './ProductList.css';
import image from '../../assets/sofa.png';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";


const products = [
    { id: 1, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    { id: 2, name: 'Table 1', category: 'Table', price: '$200', images: image },
    { id: 3, name: 'Table 1', category: 'Table', price: '$200', images: image },
    { id: 4, name: 'Table 1', category: 'Table', price: '$200', images: image },
    { id: 5, name: 'Table 1', category: 'Table', price: '$200', images: image },
    { id: 6, name: 'Table 1', category: 'Table', price: '$200', images: image },
    { id: 7, name: 'Table 1', category: 'Bed', price: '$200', images: image },
    { id: 8, name: 'Table 1', category: 'Bed', price: '$200', images: image },
    { id: 9, name: 'Table 1', category: 'Bed', price: '$200', images: image },
    { id: 10, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    { id: 11, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    { id: 12, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    { id: 13, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    { id: 14, name: 'Chair 1', category: 'Chair', price: '$100', images: image },
    // ... more product data ...
];

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleCategoryChange = e => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = page => setCurrentPage(page);

  const filteredProducts = categoryFilter === 'All'
    ? products
    : products.filter(product => product.category === categoryFilter);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
    <Navbar/>
    <div className="product-list">
    <p><Link to={'/'}>home </Link>/Product</p>
   
      <div className="filter-container">
        <div className="filter-options">
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Chair">Chairs</option>
            <option value="Table">Tables</option>
            <option value="Bed">Beds</option>
          </select>
        </div>
      </div>

      <div className="product-cards">
        {currentProducts.map(product => (
          <Link to={`/item/${product.id}`} key={product.id} className="product-link">
          <div className="product-card">
            <div className="product-image">
              <img src={product.images} alt="Product" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        </Link>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`page-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductList;
