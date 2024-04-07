import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
        <div className="about-pag">
          <br/>
      <h1 className= "text-slate-700 font-bold text-5xl">About Our Real Estate App</h1>
      <br/>
      <div className="mission-section">
        <span className='font-semibold text-blue-400 text-2xl'>
         
        <h2>Our Mission</h2>
        </span>
        <br/>
        <p className= "font-semibold text-slate-700  text-xl"> 
          At the core of our app is a commitment to simplifying the real estate journey for everyone involved...
        </p>
        <br/>
      </div>
      <div className="properties-section text-slate-700">
        <h2>About Properties</h2>
        <p>Our real estate app offers a diverse range of properties to suit every need and preference...</p>
      </div>
      <div className="contact-section  text-slate-700">
        <h2>Get in Touch</h2>
        <p>We value your feedback and are always eager to hear from our users...</p>
      </div>
      <div className="team-section  text-slate-700">
        <h2>Meet the Team</h2>
        <p>Behind our innovative real estate app is a dedicated team of developers, designers, and real estate experts...</p>
      </div>
      <div className="contact-section  text-slate-700">
        <h2>Get in Touch</h2>
        <p>We value your feedback and are always eager to hear from our users...</p>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className=' items-center mx-auto  '>
      <button className=' bg-slate-700 text-white p-4  mx-auto items-center uppercase rounded-lg dive-in border'>
      <Link
          to={"/Signup"}
        >
          Dive-in
        </Link>
         
      </button>
    </div>
    </div>
  )
}
