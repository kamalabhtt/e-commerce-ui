import React from 'react';
import './ExclusiveOffer.css';

const ExclusiveOffer = () => {
  return (
    <div className="exclusive-offer">
      <h2>🎉Get Exclusive Offers on Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>

        <input type="email" placeholder='your email id' />

        <button>Subscribe</button>



      </div>
    </div>
  );
};

export default ExclusiveOffer;
