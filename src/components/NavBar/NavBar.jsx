import React from 'react'
import './NavBar.scss'
import { images } from '../../constants'

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
    </nav>
  )
}

export default NavBar