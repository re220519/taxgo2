import React from 'react';

import './App.scss';
import WebsiteHeader from './websiteHeader';
import Feature from './component/feature';
function App() {
  return (
    <div className="App">
      
      <WebsiteHeader /> 
        <Feature /> 
    </div>
  );
}

export default App;