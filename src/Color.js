import React,{useEffect} from 'react'
import './styles/Color.css';
import multi from './images/multi.png';
import fir from './images/fir.png';
import fir_2 from './images/fir_2.png';
import picer from './images/picer.png';
import moodboard from './images/moodboard.png';
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import  { ScrollRotate } from 'react-scroll-rotate';
import Aos  from 'aos';
import "aos/dist/aos.css";
import Scroll from './Scroll';



const Color =()=>{
    useEffect(() =>{
        Aos.init({duration:5000})
    },[]);

    const location = useLocation();



    return (
        <div className="big_color">
        <Scroll/>
        <div className="Coloring_main">

            <h2 className="color_h2">Find the right color ! </h2>
            <h6>Color is a massive aspect of branding. </h6>

           
          <p>Why website colors are important?</p>

                 <section className="Coloring_box">
                
                 <div className="Coloring_inside">
                 <ScrollRotate >
                   
                    <img  className="coloring_fir" src={fir} alt="logo"/>
                    </ScrollRotate>
                    <ScrollRotate >
                    <img data-aos="fade-out" data-aos-easing="ease-in-out" className="coloring_foto" src={multi} alt="logo"/>
                    </ScrollRotate>
                    <ScrollRotate >
                     <img  className="coloring_fir_2" src={fir_2} alt="logo"/>
                    </ScrollRotate>
                   

                    </div>
                 </section>


                        <section className="moodboard_down">
                       
                       <h3 className="moodboard_h3">01. How to choose a color ?</h3>
       
                       </section>
                       <div className="moodboard_container_2">
                  
                               
                               
                               <div className="moodboard__text_2">
                               <img  className="font" src={picer} alt="foto"/>
                               <h5 className="moodboard_h5" > Complementary colors</h5>
                              

                               <p> I always try to use complementary colors because they are especially pleasing to the eye. Different types of photoreceptor cells, which contribute to color vision, perceive different types of light in the color spectrum.   </p>
                               
                               <p>Take a look to Color options on <a href="https://color.adobe.com/create/color-wheel">Adobe</a> website. </p> 
                               </div>
       
                        </div>

                       <section className="typo_down">
                       
                       <h3 className="typo_h3">02. Moodboarding</h3>
       
                       </section>

                         <div  className="moodboard" >
        
                            <img  className="moodboard_foto" src={moodboard} alt="foto"/>

                            <div className="pro__text">

                    
                    <h5 className="typo_h5" > Moodboard is the heart of the whole project! </h5>
                    <p>Once i found my colors and the I start to create my moodboard. Moodboards are actually the first feeling of future website. Before i start to create my storyboard i already have my moodboard. </p> 
                            </div>
                        </div>




             <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                           <span className="links_span">  You can take look about <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://color.adobe.com/create/color-wheel">color.adobe</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.websitebuilderexpert.com/designing-websites/how-to-choose-color-for-your-website/">websitebuilderexpert.com</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://designshack.net/articles/graphics/best-tools-tips-for-choosing-website-color-scheme/">designshack.net</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://coolors.co/">coolors.co</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="http://colormind.io/">colormind.io</a>

                           
                        </div>
                     </div>

                 </div>
            

                 

            
        

        </div>
</div>

    )
}

export default Color
