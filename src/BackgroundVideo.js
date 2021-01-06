import React from 'react';
import './styles/BackgroundVideo.module.css';
import classes from './styles/BackgroundVideo.module.css';
import back from './back.mp4';



const BackgroundVideo = () => {
    const videoSource = back
    return (
     
        
        <div className={classes.Container} >
         
            <video autoPlay="autoplay" loop="loop"  muted playsinline className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h2>Videograpfy </h2>
                    <h5>made by Hilmi Naz</h5>

                 
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default BackgroundVideo