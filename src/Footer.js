
import React from 'react'
import logo from './images/H.Naz.png'
import "./styles/Footer.css";
import {Link} from "react-router-dom";




function Footer() {
    return (
        <footer className="Footer">
             <div className="footer_in">

               
           

           <div className="Footer__Nav">
              
                <ul className="footer_logo">
                    <li><Link to="/">
           <img className="footer__logo" src={logo} alt="logo"/>
           </Link></li>
                </ul>
                <ul className="footer_contact">
              
                    <li><h2 className="footer_h2">Contact</h2></li>
                    <li><span><strong>E-mail:</strong>healmehilmi@gmail.com</span></li>
                    <li><span><strong>Phone:</strong>+43 681 817 188 18</span></li>
                    <li><span><strong>Adress:</strong>Vienna/Austria</span></li>


                </ul>
              
                <ul className="footer_otherlinks">
                <li><h2 className="footer_h2">My accounts</h2></li>
                    <li><span><a target="_blank" rel="noreferrer"  href="https://github.com/healmehilmi">Github </a></span></li>
                    <li><span><a target="_blank" rel="noreferrer"  href="https://www.behance.net/healmehilmca17">Behance </a></span></li>
                    <li><span><a target="_blank" rel="noreferrer"  href="https://www.youtube.com/channel/UCuR7eWD6vQJJlGkqV7D2xUw">Youtube</a></span></li>
                </ul>


                  <ul className="footer_info">
                    
                    <li><h2 className="footer_h2">Information</h2></li>
                    <li><p className="footer_p">This website made with Love and ReactJS.</p></li>
                    <li><p className="footer_p">site design / logo / development © 2021 by Hilmi Naz </p></li>

                   


                </ul>
          
          
          
          
          
          
          
           </div> 
           




            </div>
           
        </footer>
    
    )
}

export default Footer

