import React from 'react'
import './style.scss';
import Navbar from '../navbar';
import header2 from '../../asset/header2.jpg';
import {Divider} from 'antd';
import { CiCircleCheck } from "react-icons/ci";
import { Button } from 'antd';
import substract from '../../asset/substract.jpeg';

function Priceheader() {
    const features = [
        'Issue upto 10 Invoices',
        'Manage upto 10 Contact',
        'Card and Cash Bank Account',
        'Small Business',
        'Another Feature',
        
      ];
      const features2=[
        'Issue upto 250 Invoices',
        'Manage upto 100 Contacts',
        'Customize Bank Account',
        'Medium Business',
        'Retail Management',
        'Invoice Designs',
      ]
      const features3=[
        'Issue Unlimited Invoices',
        'Manage Unlimited Contacts',
        'Unlimited Banking for All',
        'Automated Reports',
        'Enterprise/Business',
       
      ]
  return (
    <>
   <div className='priceheadercontainer1'>
     <div className='priceheadercontainer2'>
        <div className='priceheadernav'>
            <Navbar/>
        </div>
        <div className='priceheadercontainer3'>
            <img className="servicescreen-image" src={substract} alt="" />
        </div>
        <div className='priceheader1'>
            <div className='priceheader2'>
                <div className='priceheader3'>
                    <div className='priceheader4'>
                        <div className='pricetext1'>Pricing For All Your Needs</div> 
                        <div className='pricetext2'>Tax GO flexible pricing enables your business to attain next level<br/> accounting and servicing with ease.
</div> </div>
                </div>
               
            
            <div className='priceflex1'>
                 <div className='priceflex2'>
                    <div className='priceflex3'>
                       
                       <div className='column1'>
                      <div className='columnone'>
                      <div className='columnonepadding'>
<div className='basic1'>
<div className='basic'>BASIC</div>
                          <hr className='divder' />
                          <div className='rupee'> €0/mo </div>
</div>
                     <div className='checkbox1'>
                     {features.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                      </div> 
                    
                   <div className='link1'>
                   <Button className='link2'> SIGNUP FOR FREE</Button>
                   </div>
                      </div>
                      </div>
                  </div>
                  <div className='tabprice'>
       <div className='tabprice1'>
                  <div className='fst'>
                    <div className='fstback'>hi</div>
                  </div>
                  <div className='snd'>
                    <div className='sndback'>
                    <div className='basicc'>STANDARD </div>
                          <hr className='divdr'/> 
                          <div className='rupe'>€19.99/mo</div> 
                    </div>
                  </div>
                  <div className='thrd'>
                    <div className='thrdback'>
                    <div className='checkbox2'>
                   {features2.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                   </div>
                    <div className='getst'>
                    <Button className='getstrted'>Get Started</Button> 
                    </div>
                    </div>
                  </div>
       </div>
   </div>
                  <div className='background'>
                        <div className='column2'>
                        
                       <div className='columntwo'>
                       <div className='columntwopadding'>
                        <div className='bassic2'>
                       <div className='basic2'>
                          <div className='basicc'>STANDARD </div>
                          <hr className='divdr'/> 
                          <div className='rupe'>€19.99/mo</div> 
                       </div></div>
                   <div className='checkbox2'>
                   {features2.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                   </div>
                    <div className='getst'>
                    <Button className='getstrted'>Get Started</Button> 
                    </div>
                        </div>
                       </div>
                        </div></div>
                        <div className='column3'>
                        <div className='columnthree'>
                        <div className='columnthreepadding'>
                        <div className='basic1'>
                             
                        <div className='basic'>ENTERPRISE</div>
                          <hr className='divder' />
                          <div className='rupee'> €39.99/mo </div>
</div>    
                             
                        
                     <div className='checkbox1'> 
                      {features3.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                    </div>
                      <div className='link1'>
                      <Button className='link2'>Contact Us</Button>
                      </div>
                        
                        </div>
                        </div></div>
                    </div>
                 </div></div>
            </div>
            <div></div>
        </div>
     </div>
   </div>
   <div className='mobpriceheader1'>
<div className='mobpriceheader2'>
 <div className='mobpriceheader3'>
     <Navbar />
  </div>
  <div className='mobpriceheader4'>
  <img className="pricescreen-image" src={substract} alt="" />
    </div>  
   <div className='mobpriceheader5'>
      <div className='mobpriceheader6'>
         <div className='mobpriceheader7'>
         Pricing For All Your Needs
         </div>
         <div className='mobpriceheader8'>Tax GO flexible pricing enables your business to attain next level accounting and servicing with ease.</div> 
     </div>
 </div>
<div className='mobview'>
<div className='mobview2'>
    <div className='mobfirst'>
    <div className='mobcolumn1'>
                      <div className='mobcolumnone'>
                      <div className='mobcolumnonepadding'>
<div className='basic1'>
<div className='basic'>BASIC</div>
                          <hr className='divder' />
                          <div className='rupee'> €0/mo </div>
</div>
                     <div className='checkbox1'>
                     {features.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                      </div> 
                    
                   <div className='link1'>
                   <Button className='link2'> SIGNUP FOR FREE</Button>
                   </div>
                      </div>
                      </div>
    </div></div></div>
    
    <div className='mobtabprice'>
       <div className='mobtabprice1'>
                  <div className='fst'>
                    <div className='fstback'>hi</div>
                  </div>
                  <div className='snd'>
                    <div className='sndback'>
                    <div className='basicc'>STANDARD </div>
                          <hr className='divdr'/> 
                          <div className='rupe'>€19.99/mo</div> 
                    </div>
                  </div>
                  <div className='thrd'>
                    <div className='thrdback'>
                    <div className='checkbox2'>
                   {features2.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                   </div>
                    <div className='getst'>
                    <Button className='getstrted'>Get Started</Button> 
                    </div>
                    </div>
                  </div>
       </div>
   </div>



    <div className='mobthird'>
    <div className='mobcolumn3'>
                        <div className='mobcolumnthree'>
                        <div className='mobcolumnthreepadding'>
                        <div className='basic1'>
                             
                        <div className='basic'>ENTERPRISE</div>
                          <hr className='divder' />
                          <div className='rupee'> €39.99/mo </div>
</div>    
                             
                        
                     <div className='checkbox1'> 
                      {features3.map((feature, index) => (
                      <div key={index} className='checkbox'>
                        <div className='checkicon'>
                          <CiCircleCheck />
                        </div>
                        <div className='checktext'>{feature}</div>
                      </div>
                    ))}
                    </div>
                      <div className='link1'>
                      <Button className='link2'>Contact Us</Button>
                      </div>
                        
                        </div>
                        </div></div>
    </div>
</div>

                 



 </div>
   </div>
  </>
  )
}

export default Priceheader;