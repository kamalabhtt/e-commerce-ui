import React, { useState } from 'react';
import './Kid.css';
import bannerkid from '../../assets/bannerkid.png';

import kid1 from '../../assets/kid1.png';
import kid2 from '../../assets/kid2.png';
import kid3 from '../../assets/kid3.png';
import kid4 from '../../assets/kid4.png';
import kid5 from '../../assets/kid5.png';
import kid6 from '../../assets/kid6.png';
import kid7 from '../../assets/kid7.png';
import kid8 from '../../assets/kid8.png';

const Kid = () => {
  const allProducts = [
    kid1, kid2, kid3, kid4,
    kid5, kid6, kid7, kid8,
    kid1, kid2, kid3, kid4,
    kid5, kid6, kid7, kid8,
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="kid-page">
      <div className="container">
        {/* Banner */}
        <div className="banner">
          <div className="banner-text">
            <h1>FLAT 50% OFF</h1>
            <p>12 Hours 20 Mins</p>
            <button>Explore now</button>
          </div>
          <div className="banner-image">
            <img src={bannerkid} alt="Offer" />
          </div>
        </div>

        {/* Product Control */}
        <div className="controls">
          <p><strong>Showing 1 – {visibleProducts.length}</strong> out of {allProducts.length} Products</p>
          <select className="sort-dropdown">
            <option>Sort by</option>
            <option value="price">Price</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {visibleProducts.map((url, index) => (
            <div className="product-card" key={index}>
              <img src={url} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allProducts.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kid;
