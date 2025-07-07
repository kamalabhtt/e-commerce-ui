import React from 'react'
import Hero from '../components/Hero/Hero'
import PopularWomen from '../components/PopularWomen/PopularWomen'
import Banner from '../components/Banner/Banner'
import NewCollection from '../components/NewCollection/NewCollection'
import ExclusiveOffer from '../components/ExclusiveOffer/ExclusiveOffer'



const Shop = () => {
  return (
    <div>
      <Hero/>
      <PopularWomen />
      <Banner />
      <NewCollection />
      <ExclusiveOffer />
     
    </div>
  )
}

export default Shop
