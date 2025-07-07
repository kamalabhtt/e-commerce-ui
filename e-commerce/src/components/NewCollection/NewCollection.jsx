import React from 'react';
import './NewCollection.css'; // Import external CSS file
import newcollection1 from '../../assets/newcollection1.png'
import newcollection2 from '../../assets/newcollection2.png'
import newcollection3 from '../../assets/newcollection3.png'
import newcollection4 from '../../assets/newcollection4.png'
import newcollection5 from '../../assets/newcollection5.png'
import newcollection6 from '../../assets/newcollection6.png'
import newcollection7 from '../../assets/newcollection7.png'
import newcollection8 from '../../assets/newcollection8.png'


const products = [
  {
    id: 1,
    title: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: 80,
    oldPrice: 120,
    image: newcollection1,
  },
  {
    id: 2,
    title: "Elegant V-Neck Chiffon Maxi Dress",
    price: 60,
    oldPrice: 110,
    image: newcollection2,
  },
  {
    id: 3,
    title: "Casual Short Sleeve Denim Shirt",
    price: 70,
    oldPrice: 95,
    image: newcollection3,
  },
  {
    id: 4,
    title: "Boho Floral Print Ruffle Hem Dress",
    price: 85,
    oldPrice: 130,
    image: newcollection4,
  },
  {
    id: 5,
    title: "Classic Double-Breasted Trench Coat",
    price: 150,
    oldPrice: 200,
    image: newcollection5,
  },
  {
    id: 6,
    title: "Summer Sleeveless Cotton Tank Top",
    price: 35,
    oldPrice: 50,
    image: newcollection6,
  },
  {
    id: 7,
    title: "High-Waist Pleated Skirt",
    price: 55,
    oldPrice: 80,
    image: newcollection7,
  },
  {
    id: 8,
    title: "Vintage Polka Dot Swing Dress",
    price: 95,
    oldPrice: 140,
    image: newcollection8,
  },
];

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h2 className="section-title">New Collection</h2>
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

export default NewCollection;
