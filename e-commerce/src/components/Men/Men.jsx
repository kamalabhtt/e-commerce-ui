import React, { useState } from 'react';
import './men.css';
import bannermen from '../../assets/bannermen.png';
import men1 from '../../assets/men1.png';
import men2 from '../../assets/men2.png';
import men3 from '../../assets/men3.png';
import men4 from '../../assets/men4.png';
import men5 from '../../assets/men5.png';
import men6 from '../../assets/men6.png';
import men7 from '../../assets/men7.png';
import men8 from '../../assets/men8.png';

const Men = () => {
  const allProducts = [
    men1, men2, men3, men4,
    men5, men6, men7, men8,
    men1, men2, men3, men4,
    men5, men6, men7, men8,
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="men-page">
      <div className="container">
        {/* Banner */}
        <div className="banner">
          <div className="banner-text">
            <h1>FLAT 50% OFF</h1>
            <p>12 Hours 20 Mins</p>
            <button>Explore now</button>
          </div>
          <div className="banner-image">
            <img src={bannermen} alt="Offer" />
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

export default Men;
