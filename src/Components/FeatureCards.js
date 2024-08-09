import React from 'react'
import './css/fcard.css'


const FeatureCards = ({items}) => {
  return (
    <div>
      <div className='FCard'>
         <img className='FCard-img' src={items.img}/> 
         <p>{items.cardName}</p>
      </div>
    </div>
  )
}

export default FeatureCards
