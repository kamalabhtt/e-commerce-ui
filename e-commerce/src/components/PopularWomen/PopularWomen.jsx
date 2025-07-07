import React from 'react';
import './PopularWomen.css'; // ⬅️ Import the external CSS file here

import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'





const products = [
  {
    id: 1,
    title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: 80,
    oldPrice: 120,
    image: p1 // Replace with real images
  },
  {
    id: 2,
    title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: 60,
    oldPrice: 120,
    image: p2,
  },
  {
    id: 3,
    title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: 70,
    oldPrice: 120,
    image: p3,
  },
  {
    id: 4,
    title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: 85,
    oldPrice: 120,
    image: p4
  },
];

const PopularWomen = () => {
  return (
    <div className="popular-women">
      <h2 className="section-title">POPULAR IN WOMEN</h2>
      <div className="underline"></div>
      
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-title">{product.title}</p>
            <div className="product-prices">
              <span className="price">${product.price}</span>
              <span className="old-price">${product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularWomen;
