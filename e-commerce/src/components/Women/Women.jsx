import React, { useState } from 'react';
import './Women.css';
import bannerwomen from '../../assets/bannerwomen.png';

import newcollection1 from '../../assets/newcollection1.png';
import newcollection2 from '../../assets/newcollection2.png';
import newcollection3 from '../../assets/newcollection3.png';
import newcollection4 from '../../assets/newcollection4.png';
import newcollection5 from '../../assets/newcollection5.png';
import newcollection6 from '../../assets/newcollection6.png';
import newcollection7 from '../../assets/newcollection7.png';
import newcollection8 from '../../assets/newcollection8.png';

const Women = () => {
  const allProducts = [
    newcollection1, newcollection2, newcollection3, newcollection4,
    newcollection5, newcollection6, newcollection7, newcollection8,
    newcollection4, newcollection5, newcollection6, newcollection7,
    newcollection4, newcollection5, newcollection6, newcollection7,
    newcollection6, newcollection7,
  ];

  const [visibleCount, setVisibleCount] = useState(12);
  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="women-page">
      <div className="container">
        {/* Banner */}
        <div className="banner">
          <div className="banner-text">
            <h1>FLAT 50% OFF</h1>
            <p>12 Hours 20 Mins</p>
            <button>Explore now</button>
          </div>
          <div className="banner-image">
            <img src={bannerwomen} alt="Offer" />
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

export default Women;
