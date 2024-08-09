import React, { useEffect } from 'react'
import FeatureCards from './FeatureCards'
import './css/features.css'
import { Link } from 'react-router-dom'
import qr from '../Images/Features/qr-feature.jpg'
import sa from '../Images/Features/share-able.png'

const Features = ({setOptions}) => {
   const data=[
    {
    cardName:"QR Code Generator",
    path:"/qr-generator",
    img:qr
   },{
    cardName:"Share-able",
    path:"/share-able",
    img:sa
   }
  ]
   useEffect(()=>{
    setOptions(data.length);
   })
   
  return (
    <div id='features-list'>
      {data.map((items)=>
            <Link to={items.path}><FeatureCards items={items}/></Link>
        )}
    </div>
  )
}

export default Features
