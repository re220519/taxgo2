import React from 'react';
import Gallery from './component/gallery';
import './App.scss';
import WebsiteHeader from './websiteHeader';
import Feature from './component/feature';
import Works from './component/works/index';
import Contact from './component/contact/index';
import WebsiteFooter from './component/websiteFooter/index';
function App() {
  return (
    <div className="App">
      
      <WebsiteHeader /> 
        <Feature /> 
        <Gallery />
        <Works />
        <Contact />
        <WebsiteFooter />
    </div>
  );
}

export default App;