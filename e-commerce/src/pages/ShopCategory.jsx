import React from 'react';
import Women from '../components/women/Women';
// Import Men and Kid components similarly if you have them
import Men from '../components/Men/Men';
import Kid from '../components/Kid/Kid';

const ShopCategory = ({ category }) => {
  return (
    <div>
      {category === 'women' && <Women />}
      {category === 'men' && <Men />}
      {category === 'kid' && <Kid />}
    </div>
  );
};

export default ShopCategory;
