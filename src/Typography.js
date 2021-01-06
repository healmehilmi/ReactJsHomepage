import React from 'react'
import './styles/Typo.css';
import typo from './images/typo.png';
import typp from './images/typp.png';
import font from './images/font.png';
import font_2 from './images/font_2.png';
import font_3 from './images/font_3.png';
import Links from "./Links";
import { useLocation } from 'react-router-dom';
import Scroll from './Scroll';



function Typography() {
    const location = useLocation();
    return (
        <div>
            <Scroll/>
        <div className="Typo_main">

            
            <img  className="typo_img_main" src={typo} alt="foto"/>


                 <section className="typo_box">

                    <div className="typo_inside">
                        
                        <h4 className="typo_h4">Typography must fit to design, because every product and every company has his own design character.</h4>
                      
                      
                    </div>

                   </section>
              
            
         </div>
                <section className="typo_down">
                       
                <h3 className="typo_h3_main">How i find the font ?</h3>

                </section>
                <div className="typp_container">
           
                        
                        
                        <img  className="typp" src={typp} alt="foto"/>
                        <div className="typp__text">
                        <h5 className="typo_h5" >Finding Font</h5>
                        <p>  If you get it right, typography can be incredibly powerful. </p>
                        <p> This is the perfect tool to find online fonts <a className="google" href="https://fonts.google.com/">fonts.google.com</a> </p>

                        </div>

                 </div>

                  <section className="typo_down">
                       
                       <h3 className="typo_h3">01. Font selection</h3>
       
                       </section>
                       <div className="typp_container_1">
                  
                               
                              
                               <div className="typp__text_2">
                               <img  className="font" src={font} alt="foto"/>
                               <h5 className="typo_h5" >Finding Font</h5>
                               
                               <p>  Font design is a long and involved process. Typefaces are created by craftspeople over a substantial period of time, using talent honed over many years. The best professionally designed fonts come with various weights and styles to form a complete family, plus carefully considered kerning pairs, multi-language support with international characters and expressive alternate glyphs to add character and variety to typesetting.  </p>
                               

                               </div>
       
                        </div>

                         <section className="typo_down">
                       
                       <h3 className="typo_h3">02. Contrasting typefaces</h3>
       
                       </section>
                       <div className="typp_container_2">
                  
                               
                               
                               <div className="typp__text_2">
                               <img  className="font" src={font_2} alt="foto"/>
                               <h5 className="typo_h5" >Perfect Match</h5>
                              

                               <p>  Contrast, as the name implies, is about finding totally different – but still complementary – typefaces that are each fit for their intended application. Traditionally, this involves pairing a serif with a sans serif. 


Typefaces will generally conflict if they are too similar: two ever-so-slightly different serifs or sans serifs rarely create nice font pairings.

As a designer, the important thing is to establish a clear hierarchy. This could be as simple as varying the size and weight of the same typeface – but where the typeface varies, careful font pairing is crucial. If you have a display face packed with unique personality, you'll need something more neutral to do the hard work.  </p>
                               
                               
                               </div>
       
                        </div>





                         <section className="typo_down">
                       
                       <h3 className="typo_h3">03. What now ?</h3>
       
                       </section>
                       <div className="typp_container_3">
                  
                               
                               
                               <div className="typp__text_2">
                               <img  className="font" src={font_3} alt="foto"/>
                               <h5 className="typo_h5" >Lets try</h5>
                              

                               <p>  The easiest way to find perfect font pairings is by using different fonts within the same overarching typeface family. Find a so-called 'super-family' and you'll have a ready-made range of weights, styles and classifications that are specifically designed to work together.

                                        A good super-family will include serif and a sans serif version of the same typeface: famous examples include Lucida/Lucida Sans and Meta/Meta Sans. </p>
                               
                               
                               </div>
       
                        </div>
                        <div className="links_person">
                     <Links />
                         
                    <div className="links_right_2">
                        <div className="links_right_cild_2">
                        <span className="links_span">  You can take look about <span className="links_path">  {location.pathname}</span>   </span> 
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/typography/">human-interface-guidelines by Apple</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://design.google/library/choosing-web-fonts-beginners-guide/">design.google</a>
                           <a className="links_a" target="_blank" rel="noreferrer"  href="https://www.smashingmagazine.com/2018/06/reference-guide-typography-mobile-web-design/">smashingmagazine.com</a>

                        </div>
                     </div>

                 </div>
            
        

</div>

    )
}

export default Typography
