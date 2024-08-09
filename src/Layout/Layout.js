import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({options}) => {
  return (
    <div>
      <Header options={options}/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
