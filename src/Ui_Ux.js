import React, { useEffect }  from 'react'
import './styles/Ui_Ux.css';
import Aos  from 'aos';
import websketch from './images/websketch.png';
import color from './images/color.png';
import "aos/dist/aos.css";
import ui from './images/ui.png';
import typo_img from './images/typo.png';
import Sketch from './Sketch';
import {Link} from "react-router-dom";
import Scroll from './Scroll';

const Ui_Ux =()=>{
  useEffect(() =>{
      Aos.init({duration:3000})
  },[]);



  return (
   

<div className="Ui_Ux">
 
 <Scroll/>

    <div className="banner_ui">
   
     
       <div className="ui__text">
          <h2 className="ui__h2" data-aos="fade-out">Ui/Ux</h2>
          <p className="main_ui_p">  Which fields are important for me? Typografie, Scale, Color and Position 
          I try to bring classic prencibles of print design to weblife. </p>
       </div>
       <div className="box_ui">
        
        <img  className="ui__img" src={ui} alt="foto"/>
     </div>
  

     </div>

        <h2 className="pro_title" data-aos="fade-out">Storyboard</h2>

     
     
    <div className="how">
      
        <div className="how_text">
            <h4 > "Storyboard" and "design"</h4>
            <p>The storyboard involves combining sketches and ideas into a comprehensive flow.</p>
            <p>  With design in hand, it's time for a storyboard. It's like an engagement with the users.</p>
            <Link className="define_link" to={`/storyboard`}>  
               <span >Storyboard ></span>
           </Link>
        </div>
       <Sketch />
    
    </div>
     
    
     
    <h2 className="pro_title" data-aos="fade-out">Prototyping</h2>
   

      <div  className="sketch" >
        
         <img  className="sketch_foto" src={websketch} alt="foto"/>

          <div className="pro__text">

    
              <h4 >Why i need this ?</h4>
              <p>
                Creating a prototype is not about molding the perfect piece of code but to make something that is believable when used by someone.</p>
                <Link className="pro_link" to={`/prototyping`}>
               <span >Prototyping ></span>
           </Link>
          </div>
      </div>

    <h2 className="typo_title" data-aos="fade-out">Typograpfy</h2>

     <div className="typo">

        <div className="typo_left">
        <div className="typo_left_cild">
             <img  className="typo_img" src={typo_img} alt="foto"/>
            
             
                    
        </div>
        </div>   
        <div className="typo_right">
           <div className="typo_right_cild">
          
           <h4 > Start with the basic things !</h4>
             <p>
                    When it comes to website fonts, there are so many things to look into! It can get really fast overwhelming. That’s why it’s best to start from the very basics before going any further.

              </p>
              <Link className="typo_link" to={`/typography`}>
               <span >Typograpfy ></span>
           </Link>
           </div>
        </div>

    </div>

      
      <h2 className="color_title" data-aos="fade-out">Color</h2>
             <div  className="color" >
        
      

         <div className="pro__text">

   
             <h4>Picking color !</h4>
            
             <p>Did you know that 85% of shoppers base their product purchasing decisions on color? The coice of colors is very important because it helps to determine whether to buy something or not.</p>
         <Link className="pro_link" to={`/color`}>
              <span >coloring ></span>
          </Link>
         </div>
         <img  className="color_foto" src={color} alt="foto"/>
     </div>



      <h2 className="target_title" data-aos="fade-out">Definding Target</h2>


 <div  className="target">

<div className="target_left">
<div className="target_left_cild">
    
    
     
            
</div>
</div>   
<div className="target_right">
   <div className="target_right_cild">
   
   <h4>Understanding targetgroup</h4>
     <p>
     Who are these target groups and why should your website dance to their tune?
      </p>
      <Link className="target_link" to="/target">
       <span >Defining taget  group ></span>
   </Link>
   </div>
</div>

</div>







  
  </div>
    

 
     
  )
}

export default Ui_Ux ;










