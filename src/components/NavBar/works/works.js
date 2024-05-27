import React from 'react'
import './works.css'


const Works = () => {
  return (
    <section id='works'>
    <h2 className='workTitle'>My Portfolio</h2>
    <span className='workDesc'>I'm a devoted, industrious individual who values cooperation. I'm always willing to take on new tasks and give my all effort to the group as I'm a part of it. I'm looking for a job where I can use my skills and abilities in an industry that promotes professional development and allows me to be resourceful, creative, and adaptable. 
To work for a company that values its human capital and is committed to improving the world through it, gives me the chance to share my knowledge, skills and enables the company to expand and improve its offerings.</span>
    
    <h2 className='Experience'>Personal Experiences</h2>
    
    {/* <h1>Sigma Support</h1> */}

    <span className='WorkPoints'>
–Information and Technology officer at FET Nepal<br/>
–SEO maintenance of different websites<br/>
–ASP.NET core projects  <br/>
–Full stack web development (MERN/.NET) <br/>
–Project work on Online Job Portal <br/>
–Data collector at Kathmandu metropolitan city <br/>
–Trainee at Deerwalk on MERN <br/>
-Freelancing  and Collage projects <br/>
</span>
<button className='btn'>See More</button>
    </section>
  )
}

export default Works