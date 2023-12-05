import React from 'react'
import './Navbar.scss'
import {image} from '../../constant'
const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={image.logo} alt= "logo" />
      </div>
      <ul className='app__navbar-links'>
        {['Home' , 'about', 'book','Experience', 'Contact' ].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`} >
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
