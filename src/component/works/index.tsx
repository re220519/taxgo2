import React, { useState } from 'react';
import './styl.scss';
import { CgPlayButtonO } from "react-icons/cg";
import inv from '../../asset/inv.png';
import invc1 from '../../asset/invc1.png';
import pay from '../../asset/pay.png';
import { BiChevronRightCircle } from "react-icons/bi";
import { BiChevronDownCircle } from "react-icons/bi";
/*import { FaFirstdraft } from 'react-icons/fa';*/
import firstt from '../../asset/firstt.png';
import payy from '../../asset/payy.png';
import last from '../../asset/last.png';
import { CiCircleChevDown } from "react-icons/ci";
function Works() {
   const [isClicked, setIsClicked] = useState(false);

   const handleClick = () => {
     setIsClicked(!isClicked);
   };
 return (
    <>
    <div className='workscontainerr'>
        <div className='workscontainer1'>
            <div className='worksheader'>How Tax Go Works </div>

            <div className='num'>
               <div className='num1'>
                  <div className='numbers'>01</div>
                  <div className='numbers'>02</div>
                  <div className='numbers'>03</div>
               </div>
            </div>
            <div className='number2'>
             <div className='numberr2'>  
              <div className='image1'>
              <img className="img" src={invc1} alt="" />
                </div>
                
                <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronRightCircle className='icon-large' />
      ) : (
        <CgPlayButtonO className='icon-smal' />
      )}
    </div>
                
                <div className='image1'>
                <img className="img" src={pay} alt="" />
                </div>
                <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronRightCircle className='icon-large' />
      ) : (
        <CgPlayButtonO className='icon-smal' />
      )}
    </div>
                <div className='image1'>
                <img className="img" src={inv} alt="" />
                </div>
             </div>
             <div className='numberr3'>  
              <div className='image1'>
              <img className="img" src={firstt} alt="" />
              <div className='cntnt'> Create Invoices for <br /> Customers</div>
                </div>
                
                <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronRightCircle className='icon-large' />
      ) : (
        <CgPlayButtonO className='icon-smal' />
      )}
    </div>
                
                <div className='image1'>
                <img className="img" src={payy} alt="" />
                <div className='cntnt'>Make and Receive <br /> Payments
</div>
                </div>
                <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronRightCircle className='icon-large' />
      ) : (
        <CgPlayButtonO className='icon-smal' />
      )}
    </div>
                <div className='image1'>
                <img className="img" src={last} alt="" />
                <div className='cntnt'>Prepare <br />Accounting Reports</div>
                </div>
             </div>      
            </div>
        </div>

    </div>
    <div className='WORKSCONTAINER'>
      <div className='WORKSCONTAINER1'>
         <div className='WORKSHEADER'>How Tax Go Works</div>
      </div>
      <div className='WORKSCONTAINER3'>
         <div className='WORKSCONTAINERROW1'>
            <div className='WORKSCONTAINERROW11'>
            <div className='WKS'>
               <div className='NUMBER'>01</div>
            </div>
            <div>
            <img className="imge" src={firstt} alt="" />
            </div>
            <div>
               <div className='CNTNT'>Create <br />Invoices for<br /> Customers</div>
            </div>
            </div>
         </div>
         <div className='WORKSCONTAINERROW2'>
             <div>
             <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronDownCircle className='icon-largge' />
      ) : (
        <CiCircleChevDown  className='icon-smaal' />
      )}
    </div>
             </div>
         </div>
         <div className='WORKSCONTAINERROW1'>
          <div className='WORKSCONTAINERROW11'>
          <div className='WKS'>
               <div className='NUMBER'>02</div>
            </div>
            <div>
            <img className="imge" src={payy} alt="" />
            </div>
            <div>
               <div className='CNTNT'>Make and <br />Receive<br/> Payments</div>
            </div>
          </div>
         </div>
         <div className='WORKSCONTAINERROW4'>
            <div>
            <div className='hide' onClick={handleClick}>
      {isClicked ? (
        <BiChevronDownCircle className='icon-largge' />
      ) : (
        <CiCircleChevDown  className='icon-smaal' />
      )}
    </div>
            </div>
         </div>
         <div className='WORKSCONTAINERROW1'>
        <div className='WORKSCONTAINERROW11'>
        <div className='WKS'>
               <div className='NUMBER'>03</div>
            </div>
            <div>
            <img className="imge" src={last} alt="" />
            </div>
            <div>
               <div className='CNTNT'>Prepare<br/> Accounting<br /> Reports</div>
            </div>
         </div>
        </div>

      </div>
    </div>
    </>
    
  )
}

export default Works;