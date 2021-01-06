import React from 'react'
import './styles/BackgroundVideo.module.css';
import BackgroundVideo from "./BackgroundVideo";
import Scroll from './Scroll';
import './styles/Videos.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HoverVideoPlayer from 'react-hover-video-player';
import hocoshort from "./images/videos/hocoshort.mp4";
import hoco from "./images/videos/designco.jpg";


import heree from "./images/videos/heree.jpg";
import hereeshort from "./images/videos/hereeshort.mp4";

import keiser from "./images/videos/keiser.jpg";
import keisershort from "./images/videos/f16short.mp4";


import fall from "./images/videos/fall.jpg";
import fallshort from "./images/videos/emelieshort.mp4";

import emelie from "./images/videos/emelie.jpg";
import fasionshort from "./images/videos/fasionshort.mp4";



function Videograpfy() {
    return (
        <div>
            <Scroll/>


             <div >
             
             <BackgroundVideo  />

  
            </div>
          
            
          
       
     
            <div className="video_content">



                <h3 className="video_h3">My latest video projects</h3>

                  <div className="videos_person">

                      <div className="deneme">
               
                          <HoverVideoPlayer className="deneme_ici"  videoSrc={hocoshort}  pausedOverlay={
                  
                           <img  className="deneme_foto" src={hoco} alt="foto"/> } loadingOverlay={
                           <div className="loading-overlay">
                            Loading...
                           </div>}
                           />
                     
                  
                     </div>
                             
                    
                    <div className="videos_right_2">
                        <div className="videos_right_cild_2">
                            <span className="videos_span">  Ho-Co design promo video <span className="videos_path">  </span>   </span> 
                            <strong className="video_ex">Ho-Co is grafic design company in Vienna 2020.</strong>
                            <a target="_blank" rel="noreferrer"  className="videos_a"  href="https://www.youtube.com/watch?v=cGjoJt4wKSU&t=6s"> 
                            <YouTubeIcon className="youtube" /> Watch on youtube.
                            </a>
                        </div>
                    </div>

             </div>



                  <div className="videos_person">

                      <div className="deneme">
               
                          <HoverVideoPlayer className="deneme_ici"  videoSrc={hereeshort}  pausedOverlay={
                  
                           <img  className="deneme_foto" src={heree} alt="foto"/> } loadingOverlay={
                           <div className="loading-overlay">
                            Loading...
                           </div>}
                           />
                     
                  
                     </div>
                             
                    
                    <div className="videos_right_2">
                        <div className="videos_right_cild_2">
                            <span className="videos_span">  Here Sushi Frankfurt <span className="videos_path">  </span>   </span> 
                            <strong className="video_ex">Japaniese Restaurant promo video 2020.</strong>
                            <a target="_blank" rel="noreferrer"  className="videos_a"  href="https://www.youtube.com/watch?v=OEe4jChS4-0&t=35s"> 
                            <YouTubeIcon className="youtube" /> Watch on youtube.
                            </a>
                        </div>
                    </div>

             </div>



                  <div className="videos_person">

                      <div className="deneme">
               
                          <HoverVideoPlayer className="deneme_ici"  videoSrc={keisershort}  pausedOverlay={
                  
                           <img  className="deneme_foto" src={keiser} alt="foto"/> } loadingOverlay={
                           <div className="loading-overlay">
                            Loading...
                           </div>}
                           />
                     
                  
                     </div>
                             
                    
                    <div className="videos_right_2">
                        <div className="videos_right_cild_2">
                            <span className="videos_span">  F16 restaurant Vienna <span className="videos_path">  </span>   </span> 
                            <strong className="video_ex">Cooking b-roll video for restaurant F16.</strong>
                            <a target="_blank" rel="noreferrer"  className="videos_a"  href="https://www.youtube.com/watch?v=guGixrKCxpw&t=44s"> 
                            <YouTubeIcon className="youtube" /> Watch on youtube.
                            </a>
                        </div>
                    </div>

             </div>

            <div className="videos_person">

                      <div className="deneme">
               
                          <HoverVideoPlayer className="deneme_ici"  videoSrc={fallshort}  pausedOverlay={
                  
                           <img  className="deneme_foto" src={fall} alt="foto"/> } loadingOverlay={
                           <div className="loading-overlay">
                            Loading...
                           </div>}
                           />
                     
                  
                     </div>
                             
                    
                    <div className="videos_right_2">
                        <div className="videos_right_cild_2">
                            <span className="videos_span">  Fall in Vienna <span className="videos_path">  </span>   </span> 
                            <strong className="video_ex">Beautiful view from beautiful city of Vienna 2020.</strong>
                            <a target="_blank" rel="noreferrer"  className="videos_a"  href="https://www.youtube.com/watch?v=UXJIqdNs55c"> 
                            <YouTubeIcon className="youtube" /> Watch on youtube.
                            </a>
                        </div>
                    </div>

             </div>



                   <div className="videos_person">

                      <div className="deneme">
               
                          <HoverVideoPlayer className="deneme_ici"  videoSrc={fasionshort}  pausedOverlay={
                  
                           <img  className="deneme_foto" src={emelie} alt="foto"/> } loadingOverlay={
                           <div className="loading-overlay">
                            Loading...
                           </div>}
                           />
                     
                  
                     </div>
                             
                    
                    <div className="videos_right_2">
                        <div className="videos_right_cild_2">
                            <span className="videos_span">  Fashion show on Vienna street <span className="videos_path">  </span>   </span> 
                            <strong className="video_ex">Georgeus Emelie in  Vienna 2020.</strong>
                            <a target="_blank" rel="noreferrer"  className="videos_a"  href="https://www.youtube.com/watch?v=jHV4JPNKOJA"> 
                            <YouTubeIcon className="youtube" /> Watch on youtube.
                            </a>
                        </div>
                    </div>

             </div>




        </div>



        </div>
    )
}

export default Videograpfy
