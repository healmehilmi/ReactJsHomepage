import React  from 'react'
import ReactDOM from 'react-dom';
import './styles/Sketch.css';

class Sketch extends React.Component {
    state = { active: 0 };
  
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  
    handleScroll = event => {
      const { pageYOffset } = window;
      const { active } = this.state;
  
      if (pageYOffset >= 500 && active === 0) {
        this.setState({ active: 1 });
      } else if (pageYOffset < 500 && active === 1) {
        this.setState({ active: 0 });
      }
    };
  
    render() {
      const { active } = this.state;
      return (
        <div className="draw_container">
          <div className="draw1"
            style={{
              
              display: active === 0 ? "block" : "none"
            }}
          />
          <div className="draw2"
            style={{
             
              display: active === 1 ? "block" : "none"
            }}
          />
        </div>


   

     
   
    
    );
   
  
   
    }
 
  }
  
  ReactDOM.render(<Sketch />, document.getElementById("root"));
  export default Sketch;