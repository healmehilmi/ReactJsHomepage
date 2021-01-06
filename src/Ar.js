import React, { useEffect }  from 'react'
import arkit from './images/arkit.png';
import ar from './images/ar_foto.png';
import ar_card from './images/ar_card.png';
import memo from './images/memo.png';
import'./styles/Ar.css';
import Aos  from 'aos';
import "aos/dist/aos.css";
import './styles/BackgroundVideo.module.css';
import {Link} from "react-router-dom";
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import Scroll from './Scroll';


    const Ar =()=>{
        useEffect(() =>{
            Aos.init({duration:3000})
        },[]);
    
   
        const location = useLocation();

    return (
      
        <div className="Development">

       <Scroll/>
           
           <div className="dev_banner">
           <div className="dev_banner__text">

            <h2 className="dev_title" data-aos="fade-down">Augmented Reality</h2>
            <h4>My new hobby is creating AR models.</h4>
            <p>Reality Composer makes it easy for me to create interactive augmented reality experiences. Reality Converter quickly converts my existing 3D models from Blender to USDZ so it works on all AR-enabled iPhone and iPad devices.</p>


            </div>
              
              
                <img  className="ar_foto" src={ar} alt="foto"/>

              
           </div>
         
             <section className="adobe_box">

                 <div className="adobe_inside">
                      <img  className="design" src={arkit} alt="foto"/>
                      <h4>My design tools</h4>
                      <p>Modeling 3d objects ,i am using Blender.Converting files in USDZ format ,i am using Reality Converter and Reality Composer where i build animations and deploy  the project. </p>
                     
                 </div>



            </section>
             <section className="ar_box">

                 <div className="ar_inside">
                  
                   <img  className="ar_card" src={ar_card} alt="foto"/>

                  </div>
                  <div className="card_inside">
                    <div  className="card_inside_cont">
                    <img  className="memo" src={memo} alt="foto"/>
                    <h3>AR-Cards</h3>
                    <strong>Augment reality cards are 3d contact cards.</strong>
                    <Link className="ar_link" to="/arcards">
                        <span > Want to try ? ></span>
                      </Link>
                    </div>

                    

                  </div>



              </section>
          
                        
           
           
          
        
            <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                        <span className="links_span">  You can take look about <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://developer.apple.com/augmented-reality/">developer.apple.com/augmented-reality/</a>
                           
                            
                        </div>
                     </div>

                 </div>





         




        </div>
          )


}
export default Ar
