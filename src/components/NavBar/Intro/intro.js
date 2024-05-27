import React from 'react'
import './intro.css'
import profile from '../../../assets/profile.jpg'
import {Link }from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
<div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Prasant Dhamala</span><br/>Web Developer</span>
<p className='introPara'>I am a skilled web developer with experience in developing various user friendly websites  </p>
<Link><button className='btn'>Hire Me</button></Link>
</div>
<img src={profile} alt='bg'className='profile'></img>
    </section>
  )
}

export default Intro