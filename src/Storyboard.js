import React , { useEffect }  from 'react'
import './styles/Storyboard.css';
import story from './images/story.png';
import paint from './images/paint.png';
import Aos  from 'aos';
import "aos/dist/aos.css";
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import Scroll from './Scroll';


const Storyboard =()=>{
    useEffect(() =>{
        Aos.init({duration:3000})
    },[]);


    const location = useLocation();


    return (
        <div className="storyboards">

        <Scroll/>
            
            
            

              
            <h3 data-aos="fade-out" data-aos-easing="ease-in-out"  className="story_h">Storyboard</h3>

            <div className="story_first">
                <div className="div_1"> 
                <img  className="sketch_1_img" src={story} alt="foto"/></div>
            </div>


              <section className="story_box">

                <div className="story_inside">
                    <img  className="xd" src={paint} alt="foto"/>
                    <h4>Adobe Photoshop, Adobe Illastrator and of course also by hand for prototyping websites</h4>
                    <p>Hand drawing is my absolutely favorite choice for prototyping because it is easy and fast at the same time.</p>
                
                   
                </div>



               </section>
         
               <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                        <span className="links_span">  You can take look about <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/">careerfoundry.com/your-first-wireframe</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399">beginners-guide-to-wireframing</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.smashingmagazine.com/2020/04/wireframe-design-success/">smashingmagazine.com/design-success</a>

                           
                        </div>
                     </div>

                 </div>
           
        </div>
    )
}

export default Storyboard
