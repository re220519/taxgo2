import React from 'react'
import Navbar from '../../navbar';
import header2 from '../../../asset/header2.jpg';
import './style.scss';
import men from '../../../asset/men.png';
function Serviceheader() {
  return (
    <>
    <div className='serviceheadercontainer1'>
        <div className='serviceheadercontainer2'>
           <div className='serviceheadernav'>
               <Navbar />
           </div>
           <div className='serviceimagecontainer'>
           <img className="servicescreen-image" src={header2} alt="" />
           </div>
           <div className='servicescreen1'>
              <div className='servicescreen2'>
                 <div className='servicescreen3'>
                     <div className='servicescreen4'>
                        <div className='servicetextt1'>
                            <div className='servicetext1'>We provide all in one solution to Help Your Businesses Innovate and Grow</div>
                            <div className='serviccetext1'>We provide all in one solution to Help Your <br/>Businesses Innovate and Grow</div>
                        </div>
                        <div className='servicetextt2'>
                            <div className='servicetext2'>Accounting Software <br />for Small Business<br /> in Ireland</div>
                        </div>
                        <div className='servicbutton'>
                            <div className='srvcbutn'>
                            <button className='servicebutons'>Get Started For Free</button>
                            </div>
                             </div>
                     </div>
                 </div>
              </div>
           </div>
        </div>

    </div>
    <div className='servicemobcontainer'>
        <div className='servicemobcontainer1'>
            <div className='servicemobcontainerheader'>
                <Navbar />
            </div>
            <div className='serviceimagemobcontainer'>
           <img className="servicescreen-imagemob1" src={men} alt="" />
          </div>
          <div className='servicemobcontainer2'>
            <div className='servicemobcontainer3'>
            <div className='servicemobcontainer4'>
            We provide all in one solution to Help Your<br/> Businesses Innovate and Grow
</div>
<div className='servicemobcontainer5'>Accounting Software<br/> for Small Business <br/>in Ireland</div>
<div className='servicemobcontainer6'> <button className='servicebuttonmob1'>Get Started For Free </button></div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Serviceheader;