import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import ServiceScreen from './ServiceScreen';
import HomeScreen from './component/HomeScreen';
import PriceScreen from './PriceScreen';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          
          <Route path="/ServiceScreen" element={<ServiceScreen />} />
          <Route path='/PriceScreen'   element={<PriceScreen/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;