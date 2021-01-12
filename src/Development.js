import React, { useEffect }  from 'react'
import design from './images/design.png';
import git from './images/git.png';
import code from './images/code.png';
import vs from './images/vs.png';
import back from './images/backend.png';
import front from './images/front.png';
import './styles/Development.css';
import Aos  from 'aos';
import "aos/dist/aos.css";
import './styles/BackgroundVideo.module.css';
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import Scroll from './Scroll';


    const Development =()=>{
        useEffect(() =>{
            Aos.init({duration:3000})
        },[]);
    
   
        const location = useLocation();

    return (
      
        <div className="Development">

       <Scroll/>
           
           <div className="dev_banner">
           <div className="dev_banner__text">

            <h2 className="dev_title" data-aos="fade-down">Development</h2>
            <h4>How i bring my Ideas to Life</h4>
            <p>With the power of Visual Studio code, the ease of React Js , and the revolutionary Adobe Programs, i have the freedom to create my most innovative apps ever.</p>


            </div>
              
              
                <img  className="code_foto" src={code} alt="foto"/>

              
           </div>
         
             <section className="adobe_box">

                 <div className="adobe_inside">
                      <img  className="design" src={design} alt="foto"/>
                      <h4>My design tools</h4>
                      <p>I generally use adobe programs to creat my contents.
                      Photoshop and Illustrator for creating my design contents.
                      Lightroom for content images
                      XD for prototyping.</p>
                      <a target="_blank" rel="noreferrer"  href="https://www.behance.net/healmehilmca17">Visit Behance ></a>

                 </div>



            </section>
             <section className="vs_box">

                 <div className="vs_inside">
                   <div className="vs_inside_cont">
                   <img  className="vs" src={vs} alt="foto"/>
                    <h4>Visual Studio Code</h4>
                    <p>For programing i only use Visual Studio Code. Important part is the simplicity.</p>
                   
                    
                   </div>

                  </div>
                  <div className="git_inside">
                    <div  className="git_inside_cont">
                    <img  className="git" src={git} alt="foto"/>
                    <h4>Github for deployment</h4>
                    <p>Github, we all love it right ?</p>
                    <a target="_blank" rel="noreferrer"  href=" https://github.com/healmehilmi">Visit Github ></a>
                    </div>

                   

                  </div>



              </section>
          
                        
            <div  className="front">
                    
                    <img  className="front_img" src={front} alt="foto"/>

                    <div className="front__text">

                            
                            <strong>What can I do ?</strong>
                                <h4>Frontend development</h4>
                                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                    <p>HTML,CSS,SCSS,SASS,Vanilla JS,React JS (beginner)</p>
                    </div>
            </div>
                  

              <div  className="backend">
                    
                   

                    <div className="backend__text">
                                <strong>What can I also do ?</strong>
                                <h4>Backend development</h4>
                                <p>I learned during my collage years.
                                    PHP,Laravel,Python (beginner)</p>
                    </div>
                    <img  className="backend_img" src={back} alt="foto"/>
            </div>
          
        
            <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                           <span className="links_span">  You can take look about {location.pathname}  </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://stackoverflow.com/users/12529549/hilmi">-stackoverflow.com/hilminaz</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://github.com/healmehilmi">-github.com/healmehilmi</a>

                           
                        </div>
                     </div>

                 </div>





         




        </div>
          )


}
export default Development
