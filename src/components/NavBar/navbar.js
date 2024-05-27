import React from 'react'
import './navbar.css'
 import logo1 from'../../assets/logo1.jpg'
 import contact from'../../assets/contact.png'
 import {Link }from 'react-scroll'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo1} alt='logo' className='logo'></img>
      <div className='desktop menu'>
       <Link activeClass='active' to='intro' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
       <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
       <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
       <Link activeClass='active' to='clients' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}><img src={contact} alt='contact' className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar 