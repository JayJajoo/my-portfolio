import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/IMG_1234.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h3>Hello, I'm</h3>
          <h1>Jay Jajoo</h1>
          <h3 className="text-light">Data Science Student</h3>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header