import React from 'react'
import Flicks from "../flickslogo.png"
import "../style/NavBar.css"

export default function NavBar() {
  return (
    <div>
        <header>
            <link rel="stylesheet" href="NavBar.css" />
            <img className='logo' src={Flicks} alt="logo" />
            <nav>
                <ul className='nav__links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
            <a href="#"><button>Login</button></a>
        </header>
    </div>
  )
}
