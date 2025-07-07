import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>ShopMate</h3>
          <p>Your one-stop shop for all fashion and lifestyle needs. Bringing you the best products at unbeatable prices!</p>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/exclusive">Exclusive Offers</a></li>
            <li><a href="/subscribe">Subscribe</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 ShopMate | Designed with ❤️ by Kamala Bhatta
      </div>
    </footer>
  );
};

export default Footer;
