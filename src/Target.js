import React,{useEffect} from 'react'
import './styles/Target.css';
import user from './images/user.png';
import person from './images/person.png';
import Aos  from 'aos';
import "aos/dist/aos.css";
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import Scroll from './Scroll';


const Color =()=>{
    useEffect(() =>{
        Aos.init({duration:5000})
    },[]);


    const location = useLocation();


    return (
        <div>
            <Scroll/>
            <div className="target_right_main">
                <div className="target_cild">
                
                <h2 data-aos="fade-out">What is target group?</h2>
                   <p>A target market refers to a group of customers to whom a company wants to sell its products and services, and to whom it directs its marketing efforts. And that's what it's all about- connecting with consumers to create the most impeccable product possible.</p>
                  
                </div>
             </div>



            
                       <div className="target_container_1">
                  
                               
                       <h2 className="target_h2">Why is it so important?</h2>

                               <div className="target__text_2">
                                
                               <h5 className="target_h5" >Perfect match between product and user</h5>
                              

                              <p>Not only the product, but also the approach must match your target group. If you take a look at your product or your website, you must know what kind of user would be interesting for your product or website.
                                  In this case, it is highly important to know informations of users like ages or genders.  </p>
                               
                               </div>
       
                        </div>



                   
                       <div className="target_container_2">
                  
                               
                       <h2 className="target_h2">Defining "target group"?</h2>

                               <div className="target__text_2">
                               <img  className="user" src={user} alt="foto"/>
                               <h5 className="target_h5" >Fill-in-the-blanks-method, to get to the heart of the target group, designed by Jobs-to-be-Done.</h5>
                              

                              <p>The fill-in-the-blanks method can help you visualize the quintessence of your research results in a simple sentence, providing more clarity.  </p>
                               
                               </div>
       
                        </div>   


                         




                        <div className="target_person">
                        
                                <div className="target_left_2">
                                <div className="target_left_cild_2">
                                    
                                    <p className="target_p_main">Design for people</p>
                                    <h6 className="target_h6">Personas</h6>

                                    <p className="target_p_second">Understanding people, who they are, what they need and what they like.</p>
                                    
                                   

                                    
                                            
                                </div>
                                </div>   
                                <div className="target_right_2">
                                <div className="target_right_cild_2">
                                <img  className="person" src={person} alt="logo"/>
                                
                                    <p className="target_p" >
                                  <span className="target_span">  A persona combines all the findings you have gathered on the target group with the help of qualitative and quantitative research in a fictitious person. </span> The contents of the results determine the character of the persona. In this way, persona, as an example person, represents all real characteristics and needs of a certain target group
                                    </p>
                                   
                                </div>
                                </div>

                                </div>





                                <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                        <span className="links_span">  You can take look on <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://getflywheel.com/layout/design-target-audience/">design-target-audience</a>
                           
                        </div>
                     </div>

                 </div>
                      

       </div>

    )
}

export default Color
