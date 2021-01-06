import React from 'react'
import logo from './images/H.Naz.png'
import "./styles/Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="header">
          
           <Link to="/">
           <img className="header__logo" src={logo} alt="logo"/>
           </Link>
            
           <div className="header__Nav">
           <Link className="header__link" to="/ui-ux">
                <span>UI/UX</span>
           </Link>
           <Link className="header__link" to="/ar">
               <span>AR</span>
           </Link>
           <Link className="header__link" to="/development">
               <span>Development</span>
           </Link>
           <Link className="header__link" to="/videograpfy">
               <span>Videograpfy</span>
           </Link>

            

           </div> 
           
        </nav>
    
    )
}

export default Header
