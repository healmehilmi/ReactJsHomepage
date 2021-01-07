import React ,{Component} from 'react'
import'./styles/Ar.css';
import './styles/Arcards.css';
import Arcard from './images/arcard.png';
import kagit from './ars/kagit.usdz';



class Arcards extends Component {
    render() {

        return(
        
        <div>
            
          <section className="Arcards_box">

            <div className="Arcards_inside">
            <div className="Arcards_inside_cont">
            <h2 className="Arcards_h2">Arcards</h2>
            <p className="Arcards_p">Tap on  the card</p>
            
            <a className="kagit_a" rel="ar" href={kagit}>
            <img className="kagit_foto"   src={Arcard} alt="logo"/>
           </a>

            

            </div>

           
          

             </div>


            </section>
        </div>
    )
}
}

export default Arcards;
