import React, { useEffect}  from 'react'
import foto from './images/ben.png';
import conteiner1__foto from './images/ar.png';
import conteiner2__foto from './images/fly.png';
import './styles/Home.css';
import Button from '@material-ui/core/Button';
import Aos  from 'aos';
import "aos/dist/aos.css";
import './styles/BackgroundVideo.module.css';
import Scroll from './Scroll';






    const Home =()=>{
        useEffect(() =>{
            Aos.init({duration:2000})
        },[]);
    
   
         
      

    return (
        <div className="home">


        <Scroll/>
           
           <div className="banner">
          
         
                   
              <img  className="banner__foto" src={foto} alt="logo"/>
            
              <div className="banner__text">

              <h2 className="main_h2" >Hello World !</h2>    
               <p className="main_p" data-aos="fade-down" data-aos-duration="4000">My name is Hilmi Naz. I'm a junior fronted developer, Ui/Ux designer and videographer.</p>

          
              </div>
           </div>
           <div class="container">
	         <div  class="field">
	     	   <div class="mouse"></div>
		
	        </div>
           </div>
          
          
          
          
         
           <div  data-aos="fade-up" className="conteiner1">
             
              <div  className="conteiner1__text">

               <h4 >What am i doing currently ?</h4>
               <p>At the moment i'm working as a freelancer
               
               on website design and videography projects.
               Right now i'm focusing on augmented reality
               technologie as well.</p>
              


          
              </div>

               <img  className="conteiner1__foto" src={conteiner1__foto} alt="foto"/>
           </div>

           <div className="conteiner1">
           <img data-aos="fade-up-right" className="conteiner2__foto" src={conteiner2__foto} alt="logo"/>
             <div className="conteiner1__text">

              <h4 >Who am i?</h4>
             
              <p>I am web developer and graphic designer. I live in Vienna since 10 years, but originally i'm from Turkey.
                  I studied web development at SAE-Vienna. 
              </p>

  
  
              


         
             </div>

             
          </div>


         




        </div>
          )


}
export default Home
