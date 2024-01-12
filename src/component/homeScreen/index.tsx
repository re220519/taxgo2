import React from 'react'
import WebsiteHeader from '../../websiteHeader';
import Feature from '../feature';
import Gallery from '../gallery';
import Works from '../works';
import Contact from '../contact';
import WebsiteFooter from '../websiteFooter';

function HomeScreen() {
  return (
    <div>
        <WebsiteHeader /> 
        <Feature /> 
        <Gallery />
        <Works />
        <Contact />
        <WebsiteFooter />
    </div>
  )
}

export default HomeScreen;
