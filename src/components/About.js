import React from 'react'
import logo from "../assets/logo.svg";

function About(props) {
  return (
    <aside>
        <img src={logo} placeholder='https://via.placeholder.com/215' alt='blog logo'/>
        <p>{props.blogText}</p>
    </aside>
  )
}

export default About