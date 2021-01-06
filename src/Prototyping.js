
import Aos  from 'aos';
import "aos/dist/aos.css";
import React, { useEffect }  from 'react'
import './styles/Prototyping.css';
import proto from './images/proto.png';
import protot from './images/protot.png';
import { useLocation } from 'react-router-dom';
import Links from "./Links";
import Scroll from './Scroll';


const Prototyping =()=>{
    useEffect(() =>{
        Aos.init({duration:3000})
    },[]);


   
    const location = useLocation();



    return (
        <div className="big_over">
        <Scroll/>

        <h3 className="pro_h3_main">Prototyping</h3>
        <div data-aos="fade-down" data-aos-duration="6000" className="over">
            
            <div data-aos="fade-up" data-aos-duration="1000" className="pro_main">

                     <ul data-aos="fade-out" className="pro_nav">
                         <li data-aos="fade-right" data-aos-duration="1000" className="pro_nav_1"></li>
                         <li data-aos="fade-down" data-aos-duration="2000" className="pro_nav_2"></li>
                         <li data-aos="fade-down" data-aos-duration="6000" className="pro_nav_2"></li>
                         <li data-aos="fade-left" data-aos-duration="8000" className="pro_nav_2"></li>
                    </ul>  
                    <ul className="pro_banner">
                         <li data-aos="fade-right" data-aos-duration="7000" className="pro_banner_1"></li>
                         <li data-aos="fade-left" data-aos-duration="4000" className="pro_banner_2"></li>
                       
                    </ul>  
                    <ul className="pro_section">
                         <li data-aos="fade-up" data-aos-duration="6000" className="pro_section_1"></li>
                         <li data-aos="fade-down" data-aos-duration="5000" className="pro_section_2"></li>
                       
                    </ul> 


             </div>   

            

                

        </div>

                 <h4 className="pro_h4">The first step is to build an awesome product</h4>

            <div className="pro_container">
           
           
           
             <img  className="proto" src={proto} alt="proto"/>
             <div className="proto__text">
                  <h6 data-aos="fade-out"> Power of prototyping</h6>
                  <p> Essentially, a website prototype allows the project stakeholders to see what the final product will look like early in the project lifecycle. The key reason for creating the prototype is to get feedback from stakeholders and users to make sure it is going in the right direction. </p>
            </div>

            </div>
       
       
       
       
            <section className="story_box">

                <div className="story_inside">
                    <img  className="xd" src={protot} alt="foto"/>
                    <h6>Adobe Xd and Skecht are prototyping tools ,i use. </h6>
                    <p>Hand drawing is my absolutely favorite method for prototyping.</p>
                    
                   
                </div>



               </section>
       
       
               <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                          <span className="links_span">  You can take look about <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/">freecodecamp.org</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.smashingmagazine.com/2018/03/guide-wireframing-prototyping/">smashingmagazine.com</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.smashingmagazine.com/2020/04/wireframe-design-success/">smashingmagazine.com/design-success</a>

                           
                        </div>
                     </div>

                 </div>
       
       
       
       
       
       
       
       
        </div>
    )
}

export default Prototyping;
