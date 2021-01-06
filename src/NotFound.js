import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import './styles/Notfound.css';
import { Link } from 'react-router-dom';
const NotFound = () => (
  <div className="not_back">
      <Header />

          <section className="not_box">

<div className="not_inside">
  <div className="not_inside_cont">
   <h2 className="not_h2">404</h2>
   <h4>Page not found.</h4>
   <p>Sorry,but the page that you requested doesn't exist.</p>
  
    <Link className="define_link" to={`/`}>  
               <span >Go back home ></span>
           </Link>
  
    
  </div>

 </div>




</section>
          
          <Footer />
   
  </div>
);

export default NotFound;