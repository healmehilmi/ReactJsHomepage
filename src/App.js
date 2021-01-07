import React from "react";
import Header from "./Header";
import Home from "./Home";
import Ui_Ux from "./Ui_Ux";
import Prototyping from "./Prototyping";
import Development from "./Development";
import Color from "./Color";
import Target from "./Target";
import Links from "./Links";
import Videos from "./Videos";
import Storyboard from "./Storyboard";
import Videography from "./Videography";
import Typography from "./Typography";
import Headervideo from "./Headervideo";
import Ar from "./Ar";
import Arcards from "./Arcards";
import NotFound from "./NotFound";



import Footer from './Footer';

import {BrowserRouter as Router,Switch ,Route} from "react-router-dom"

import ScrollToTop  from "./ScrollToTop";




 


function App() {

 
  return (


    
    <Router>

    <div className="app">
      <Switch>
      
        <Route  path="/ui-ux">
        <ScrollToTop />
         <Header />
          <Ui_Ux />
          <Footer />
        </Route>
        <Route path="/storyboard">
        <ScrollToTop />
         <Header />
          <Storyboard />
          <Footer />
        </Route>
        <Route path="/prototyping">
        <ScrollToTop />
         <Header />
          <Prototyping />
          <Footer />
        </Route>
        <Route path="/typography">
        <ScrollToTop />
         <Header />
          <Typography />
          <Footer />
        </Route>
        <Route path="/color">
        <ScrollToTop />
         <Header />
          <Color />
          <Footer />
        </Route>
        <Route path="/links">
        <ScrollToTop />
         <Header />
          <Links />
          <Footer />
        </Route>
        <Route path="/target">
        <ScrollToTop />
         <Header />
          <Target />
          <Footer />
        </Route>
     
        <Route path="/ar">
        <ScrollToTop />
        <Header />
        <Ar />
         
          <Footer />
        </Route>
        <Route path="/arcards">
        <ScrollToTop />
        <Header />
        <Arcards />
         
          <Footer />
        </Route>
        <Route path="/development">
        <ScrollToTop />
        <ScrollToTop />
        <Header />
        
          <Development />
          <Footer />
        </Route>
        <Route path="/videography">
        <ScrollToTop />
        <Header />
        <Headervideo/>
        <Videography/>
          
          <Footer />
        </Route>
        <Route path="/videos">
        <ScrollToTop />
        <Header />
        
        <Videos />
          
          <Footer />
        </Route>
        
       
        
        <Route exact path="/">
        <ScrollToTop />
         <Header />
     
          
          <Home />
          <Footer />
        </Route>
        
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
