import React from 'react'
import "./header.css"
import {Navbar,HeroSection} from "../../components"

function Header() {
  return (
   <div className='header__container'>
   <Navbar/>
   <HeroSection/>

   </div>
  )
}

export default Header