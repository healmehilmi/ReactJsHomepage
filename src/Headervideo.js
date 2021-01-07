import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import './styles/Headervideo.css';



function Header() {
    return (
        <nav className="header">

            <h5>Watch in Youtube    </h5>
            <a className="header__link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCuR7eWD6vQJJlGkqV7D2xUw">
            <YouTubeIcon className="youtube" />
           </a>
            
        </nav>
    
    )
}

export default Header
