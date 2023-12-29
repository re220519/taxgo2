import React from 'react'
import './style.scss';
import TAXGOLOGO from '../../asset/TAXGOLOGO.png';
import taxgologoss from '../../asset/taxgologoss.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import image2 from '../../asset/image2.png';
import image3 from '../../asset/image3.png';
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

function WebsiteFooter() {
  return (
    <>
    <div className='websiteFootercontainer'>
        <div className='footerfirst'>
              <div className='footerfirstrow'>
                   <div className='footerfirstcolumn1'>
                        <img className="img" src={TAXGOLOGO} alt="" /> 
                   </div>
                   <div className='footerfirstcolumn2'>
                       <div className='fotermobile'>
                       <div className='footermobile'>
                            <div className='mob1'><FiPhone /></div>
                           <div className='mob2'>+ (353) 85 199 5043</div>
                        </div>
                        <div className='footermail'>
                          <div className='email1'><FiMail /></div>
                          <div className='email2'>mailto:info@taxgoglobal.com</div>
                        </div>
                       </div>
                    </div>
              </div>
              <div className='footersecondrow'>
              <div><div className='producT'>PRODUCT</div></div>
              <div className='tax'>
                 <div>Tax Calculator</div>
                 <div>Accounting</div>
                 <div>Retail</div>
                 <div>Consulting</div>
                 <div>Payroll</div>
              </div>
               </div>
           <div className='footerthirdrow'>
              <div><div className='abouT'>ABOUT</div></div>
              <div className='company'>
                <div>Company</div>
                <div>Signup</div>
                <div>Login</div>
                <div>Plans</div>
                <div>Terms and Condition</div>
                <div>Privacy and Policy</div>
              </div>
           </div>
           <div className='footerfourthrow'>
             <div className='sclmda'>
                <div className='find'>FIND US ON SOCIAL MEDIA</div>
                <div className='scl'>
                 <FaFacebook size={15}  style={{ margin: '0 0px', color: 'white', borderRadius: '50%' } } /> 
                 <FaInstagram size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%'}} /> 
                       <FaTwitter size={15} style={{ margin: '0 0px' , color: 'white', borderRadius: '50%' }} />
                        <FaLinkedin size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%' }} />
                </div>
             </div>
             <div className='download'>
                <div className='appp'>DOWNLOAD APPS</div>
                <div className='appiimg'>
                <div className='image22'><img className="iimg" src={image2} alt="" /></div>
                <div className='image33'><img className="iimg" src={image3} alt="" /></div>
                </div>
             </div>
           </div>
        </div>
        <div className='footersecond'> 
        <div > <hr className="hr"/></div>
        </div>
        <div className='footerthird'>
           <div className='copywrite'><span>© www.taxgoglobal.com 2023 .</span> Privacy . Terms and Conditions . All rights reserved</div>
        </div>
    </div>
    <div className='footertabcontainer'>
      <div className='footertab1'>
        <div className='footertabb1'>
        <div className='fter1'>
           <img className="imgtaxgo" src={TAXGOLOGO} alt="" /> 
        </div>
        <div className='fter2'>
           <div className='findus'>FIND US ON SOCIAL MEDIA</div>
           <div className='SL'>
           <FaFacebook size={15}  style={{ margin: '0 0px', color: 'white', borderRadius: '50%' } } /> 
                 <FaInstagram size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%'}} /> 
                       <FaTwitter size={15} style={{ margin: '0 0px' , color: 'white', borderRadius: '50%' }} />
                        <FaLinkedin size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%' }} />
           </div>
           <div className='DOWNLOAD'>
              
                <div className='apppiimg'>
                <div className='imagge22'><img className="iimg" src={image2} alt="" /></div>
                <div className='imagge33'><img className="iimg" src={image3} alt="" /></div>
            </div>
           </div>
           </div>
        </div>
      </div>
      <div className='footertab2'>
        <div className='ftertab2'>
         <div className='footertab22'>
           <div><div className='producT'>PRODUCT</div></div>
           
           <div className='taxx'>
                 <div>Tax Calculator</div>
                 <div>Accounting</div>
                 <div>Retail</div>
                 <div>Consulting</div>
                 <div>Payroll</div>
              </div>
           
           </div>
           <div className='footertab33'>
             <div> <div className='abot'>ABOUT</div></div>
             <div className='companyy'>
                <div>Company</div>
                <div>Signup</div>
                <div>Login</div>
                <div>Plans</div>
                <div>Terms and Condition</div>
                <div>Privacy and Policy</div>
              </div>
           </div>
           <div className='footertab44'>
             <div><div className='reach'>REACH US</div></div>
             <div className='terms'>
               <div>Terms</div>
               <div>Privacy</div>
             </div>
           </div>
           </div>
      </div>
     {/* <div className='footersecond'> 
        <div > <hr className="hr"/></div>
        </div>*/}
        <div className='footerthird'>
           <div className='copywrite'> <span>© www.taxgoglobal.com 2023 .</span> Privacy . Terms and Conditions . All rights reserved</div>
        </div>
    </div>
    <div className='footercontainermob'>
       <div className='footercontainermob1'>
          <div className='footercontainermob2'>
          <div className='ftermob1'>
           <img className="imgtaxgomob" src={TAXGOLOGO} alt="" /> 
        </div>
        <div className='DOWNLOADmob'>
              
                <div className='apppiimgmob'>
                <div className='imagge222'><img className="iimg" src={image2} alt="" /></div>
                <div className='imagge333'><img className="iimg" src={image3} alt="" /></div>
                 </div>
            </div>
            <div>
            <div className='Sl'>
                 <FaFacebook size={15}  style={{ margin: '0 0px', color: 'white', borderRadius: '50%' } } /> 
                   <FaInstagram size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%'}} /> 
                        <FaTwitter size={15} style={{ margin: '0 0px' , color: 'white', borderRadius: '50%' }} />
                         <FaLinkedin size={15} style={{ margin: '0 0px', color: 'white', borderRadius: '50%' }} />
            </div>
 </div>
<div className='pro'>
  <div className='pro1'>
  <div><div className='producTT'>PRODUCT</div></div>
           
           <div className='taxxx'>
                 <div>Tax Calculator</div>
                 <div>Accounting</div>
                 <div>Retail</div>
                 <div>Consulting</div>
                 <div>Payroll</div>
              </div>
  </div>
  <div className='pro2'>
  <div> <div className='abott'>ABOUT</div></div>
             <div className='comppanyy'>
                <div>Company</div>
                <div>Signup</div>
                <div>Login</div>
                <div>Plans</div>
                 </div>
           
           
  </div>
</div>
<div className='proo'>
  <div className='producTT'>TERMS</div>
  <div className='abott'>PRIVACY</div>
</div>

            </div>
                   
          </div>
          <div className='footerthirdd'>
           <div className='copywritee'> <span>© www.taxgoglobal.com 2023 .</span> Privacy . Terms and Conditions . All rights reserved</div>
        </div> 
    </div>
    </>
  )
}

export default WebsiteFooter;