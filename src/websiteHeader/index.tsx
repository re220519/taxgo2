import React from 'react'
import Navbar from '../component/navbar';
import header from '../asset/header.jpg';
import header1 from '../asset/header1.jpg';
import './style.scss';
import taxgologo from '../asset/taxgo logo.png';
/*import logomobile  from '../asset/logomobile.png';*/
function WebsiteHeader() {
  return (
    <>
    <div className="homeScreen-Box1">
      
      <div className="homeScreen-Box2">
      
       
          
            <div className="NavbarContainer">
              <Navbar />  
              
            </div>
            <div className="ImageContainer">
            <img className="homeScreen-carousalImg" src={header} alt="" />
            <img className="homeScreen-carousalImg1" src={header1} alt="" /></div>
        <div className="homeScreen-Box3">
          
          <div className="homeScreen-Box4">
          <div className="homeScreen-Box5">
              <div className="homeScreen-Box6">
                <div className="homeScreen-Txt2">
                Simple, Best & Affordable 
                 Accounting Software Solution
                </div>
                <div className="homeScreen-Txt3">
                Simple, Best <br />And Affordable<br /> 
                 Accounting Software <br /> Solution
                </div>
               </div>
             <br />
                 <div className='homeScreen-Txt1'>
                <img className="img-fluid" src={taxgologo} alt="" />
              </div>
                <br />
             
              <div className="homeScreen-Box7">
                <div>
                  <button className="homeScreen-Box8">Contact Us</button>
                </div>
               
              </div>
            </div>
          </div>
          <div className="homeScreen-Box10"></div>
        </div>
      </div>
     {/* <WebsiteFooter /> */}
     </div>
        </>
  );
}

export default WebsiteHeader;
