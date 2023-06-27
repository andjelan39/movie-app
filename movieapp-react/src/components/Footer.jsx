import React from 'react'
import Flicks from "../flickslogo.png"
import "../style/Footer.css"

function Footer() {
  return (
    <div className='footer__content'>
        <div className='footer__div'>
            <link rel="stylesheet" href="Footer.css" />
            <img className='logo-footer' src={Flicks} alt="logo" />
            <ul className='ft__links'>
                <li><a href="#">EXPLORE WHAT'S ON</a></li>
                <li><a href="#">AFFILIATE PROGRAM</a></li>
                <li><a href="#">FLICKS SIGN UP</a></li>
            </ul>
            <ul className='ft__links'>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Manage Preferences</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Corporate Info</a></li>
            </ul>
        </div>
        <div className='copyright'>
            ©2023 Flicks. All Rights Reserved.
        </div>
    </div>
   
  )
}

export default Footer