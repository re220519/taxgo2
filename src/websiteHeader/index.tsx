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
            </div>
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
          
        </div>
      </div>
     {/* <WebsiteFooter /> */}
     </div>
     <div className='homeScreen1'>
        <div className='homeScreen2'>
            <div className='NavbarContainer'>
               <Navbar />
            </div>
            <div className='imagecontainer'>
            <img className='homeScreen-carousalImg1' src={header1} alt=" "/>
            </div>
            <div className='homeScreen3'>
                <div className='homeScreen4'>
                    <div className='homeScreen5'>
                    <div className='homeScreen6'>
                      <div className='welcome'>WELCOME TO Tax GO ACCOUNTING </div>
                      <div className="homeScreen-Txt4">
                Simple, Best & Affordable <br />
                 Accounting Software<br /> Solution
                </div> 
                </div>
                    </div>
                </div>
            </div>
            <div className='we'>
                <div className='mobileWe'>
                    <div className='first'>WE ADVICE BUSINESS </div>
                    <div className='second'>Expert Financial Advice <br />and Consultancy</div>
                   <div className='third'>
                   <button className='contact'>Contact Us</button>
                   </div>
                    
                </div>
            </div>
        </div>
     </div>
        </>
  );
}

export default WebsiteHeader;
