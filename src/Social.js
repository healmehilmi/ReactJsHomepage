import React from 'react'
import './styles/Social.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';



function Social() {
    return (
        <div className="social_icons">
            <AlternateEmailIcon />
            <InstagramIcon />
            <PhoneIcon />
            <GitHubIcon />
        </div>
    )
}

export default Social
