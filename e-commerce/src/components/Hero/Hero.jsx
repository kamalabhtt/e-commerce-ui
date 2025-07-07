import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand-icon.png'
import arrowIcon from '../Assets/arrow-icon.png'
import hero from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <div>
            <p>Collection</p>
            <p>For everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>
              Latest Collection
            </div>
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero

