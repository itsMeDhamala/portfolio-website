import React from 'react'
import './skills.css'
import coding11 from '../../../assets/coding11.png'
import webDevelop1 from '../../../assets/webDevelop1.png'
import itSupport1 from '../../../assets/itSupport1.png'


const skills = () => {
  return (
    <section id='skills'>
<span className='skillTitle'>What I can do </span>
<span className='skillDesc'>
    I am a skilled and passionate web web designer and web developer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of designing and developing in depth.I am proficient in HTML,CSS and Javascript as well as software designing and development.
    I have also an experience in networking field .
</span>
<div className='skillBars'>
<div className='skillBar'>
<img src={coding11} alt='webDesign' className='skillBarImg'/>
<div className='skillBarText'></div>
<h2>Web development </h2>
<p>I have well knowledge about the web designing field</p>
</div>

<div className='skillBar'>
<img src={webDevelop1} alt='webDevelop' className='skillBarImg'/>
<div className='skillBarText'></div>
<h2>Software developing</h2>
<p>I have an experience in the field of software development</p>
</div>

<div className='skillBar'>
<img src={itSupport1} alt='itSupport' className='skillBarImg'/>
<div className='skillBarText'></div>
<h2>IT supporting</h2>
<p>I am an IT support officer for many firms </p>
</div>
</div>

    </section>
  )
}

export default skills