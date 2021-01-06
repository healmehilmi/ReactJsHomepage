import React from 'react'
import './styles/Videos.css';
import fall from './images/videos/fall.jpg';
import designco from './images/videos/designco.jpg';
import heree from './images/videos/heree.jpg';
import keiser from './images/videos/keiser.jpg';




function Videos() {
    return (
        <div>
          
          <section className="videos">
          
          <ul>
            <li> <img  src={fall} alt="foto"/></li>
            <li> <img  src={designco} alt="foto"/></li>
            <li> <img  src={heree} alt="foto"/></li>
            <li> <img  src={keiser} alt="foto"/></li>
            <li> <img  src={fall} alt="foto"/></li>
          </ul>

      </section>
        </div>
    )
}

export default Videos
