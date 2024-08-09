import React from 'react'
import './css/home.css'
import Features from './Features'

const Home = ({setOptions}) => {
  return (
    <div id='Home'>
      <div id='welcome-home'>
        Hello User.!
      </div>
      <div id='home-features'>
       <Features setOptions={setOptions}/>
      </div>
    </div>
  )
}

export default Home
