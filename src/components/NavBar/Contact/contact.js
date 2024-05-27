import React from 'react'
import './contact.css'
import bank1 from '../../../assets/bank1.png'
import company1 from '../../../assets/company1.png'
import instagram1 from '../../../assets/instagram1.png'
import facebook1 from '../../../assets/facebook1.png'
import linkdin1 from '../../../assets/linkdin1.png'


const Contact = () => {
  return (
   <section id='contactPage'>
    <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies some of the notable companies
        I have worked with includes</p>
    </div>
   <div className='clientImgs'>
   Popular banks
    <img src={bank1} alt='' className='clientImg'></img>

    Software companies
    <img src={company1} alt='' className='clientImg'></img>
   </div>
<br/>
<br/>
   <div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the from below for the to discuss any work opportunities.</span>
    <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'></input>
        <input type='email' className='email' placeholder='Your Email'></input>
        <textarea className='msg' rows={5} placeholder='Your Message'></textarea>
        <button type='submit' value='Send'className='submitBtn'>Submit</button>

        <h3 className='Connect'>Connect with me </h3>
        <div className='links'>
           <img src={facebook1} className='link'></img>
           <img src={instagram1} className='link'></img>
           {/* <img src={linkdin1} className='link'></img> */}
 
             </div>
    </form>
   </div>
   </section>
  )
}

export default Contact