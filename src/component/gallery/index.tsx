import React from 'react'
import './style.scss';
/*import retail from '../../asset/retail.png';*/
import cashh from '../../asset/cash.png';
import cheff from '../../asset/cheff.png';
import calculator from '../../asset/calculator.png';
import inst from '../../asset/inst.png';
import businesss from '../../asset/businesss.png';
/*import womann from '../../asset/womann.png';*/
import logistcs from '../../asset/logistcs.png';
import phtographerrr from '../../asset/phtographerrr.png';
import retail2nd from '../../asset/retail2nd.png';
/*import business2nd from '../../asset/business2nd.png';*/
import women2nd from '../../asset/women2nd.png';

function Gallery() {
  return (
 <>
 <div className='gallery'>
   <div className='gallery1'>
    <div className='headere'>
    Use case of tax GO system..
    </div>
    <div className='images'>
        <div className='images1'>
        <div className='row1'>
             <div className='one'>
             <img className="img" src={retail2nd} alt="" />
               <div className='centre'>RETAIL </div>
             </div>
             <div className='two'>
             <img className="img" src={women2nd} alt="" />
             <div className='centre'>HEALTHCARE </div>
             </div>
             <div className='three'>
             <img className="img" src={businesss} alt="" />
             <div className='centre'>BUSINESS </div>
             </div>
          </div>
          <div className='row2'>
          <div className='four'>
             <img className="img" src={phtographerrr} alt="" />
             <div className='centre'>PHOTOGRAPHER </div>
             </div>
             <div className='five'>
             <img className="img" src={cheff} alt="" />
             <div className='centre'>RESTAURENT </div>
             </div>
             <div className='six'>
             <img className="img" src={logistcs} alt="" />
             <div className='centre'>LOGISTICS</div>
             </div>
          </div>
          <div className='row3'>
            <div className='one'>
             <img className="img" src={calculator} alt="" />
             <div className='centre'>FINANCE</div>
             </div>
             <div className='two'>
             <img className="img" src={inst} alt="" />
             <div className='centre'>INSTRUCTOR</div>
             </div>
             <div className='three'>
             <img className="img" src={cashh} alt="" />
             <div className='centre'>PAYMENT</div>
             </div>
          </div>
        </div>
        <div className='Images1'>
        <div className='Row1'>
             <div className='One'>
             <img className="Img" src={retail2nd} alt="" />
               <div className='Centre'>RETAIL </div>
             </div>
             <div className='Two'>
             <img className="Img" src={women2nd} alt="" />
             <div className='Centre'>HEALTHCARE </div>
             </div>
             
          </div>
          <div className='Row2'>
          <div className='Four'>
             <img className="Img" src={phtographerrr} alt="" />
             <div className='Centre'>PHOTOGRAPHER </div>
             </div>
             <div className='Five'>
             <img className="Img" src={businesss} alt="" />
             <div className='Centre'>Business </div>
             </div>
             
          </div>
          <div className='Row3'>
            <div className='Three'>
               <img className="Img" src={cashh} alt="" />
               <div className='Centre'>PAYMENT</div>
            </div>
          </div>
          <div className='Row4'>
               <div className='Six'>
               <img className="Img" src={cheff} alt="" />
               <div className='Centre'>restaurent</div>
               </div>
               <div className='Seven'>
               <img className="Img" src={logistcs} alt="" />
               <div className='Centre'>logistics</div>
               </div>
          </div>
          <div className='Row5'>
            <div className='Eight'>
            <img className="Img" src={cashh} alt="" />
               <div className='Centre'>FINANCE</div>
            </div>
            <div className='Nine'>
            <img className="Img" src={inst} alt="" />
               <div className='Centre'>INSTRUCTOR</div>
            </div>
          </div>
        </div>
    </div>
   </div>
 </div>
 </>
  )}
 
  export default Gallery;   