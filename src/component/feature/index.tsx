import React from 'react'
import './style.scss';
import { Card } from 'antd';
import first from "../../asset/first.png";
import second from "../../asset/second.png";
import third from "../../asset/third.png";
import fourth from "../../asset/fourth.png";


function Feature() {
  return (
   <>
   <div className='featurecontainer1'>
       <div className='featurecontainer2'>
         <div className='featureheader'> Our Features </div>
         <div className='cardd'>
            <div className='cardcontainer'>
             
            <Card className='card' 
               cover={<img alt="example" src={first} />}>
                <div className='text1'>
                <div className='text3'>
                <h1 className='text'>Global Access
 </h1></div>
                   <div className='textt'>
                 <p className='text2'>Cloud Based Accounting Software enables access to your and your client accounts anywhere and anytime.
 </p>
                </div></div>
                 
            </Card>
            <Card className='card'
               cover={<img alt="example" src={second} />}>
                <div className='text1'>
                 <div className='text3'>
                 <h1 className='text'> 
                 Accounting Solution
                 </h1></div>
                 <div className='textt'>
                 <p className='text2'>Tax GO Accounting Software manage invoices, customers, suppliers, banking and prepare reports on the GO. </p>
                 </div></div>
            </Card>
            <Card className='card' 
              cover={<img alt="example" src={third} />}>

                 <div className='text1'>
                 <div className='text3'>
                 <h1 className='text'>General Consultancy </h1></div>
                 <div className='textt'>
                 <p className='text2'> 24/7 Consultancy support from Tax GO Accounting and software experts to help engage your business and save your time.</p>
                 </div></div>
            </Card>
            <Card className='card' 
               cover={<img alt="example" src={fourth} />}>
               <div className='text1'>
               <div className='text3'>
                 <h1 className='text'>Regulated and Legislated </h1></div>
                 <div className='textt'>
                 <p className='text2'> Stay up to date with the latest legislation for tax, accounting, and payroll. Call us today to start managing your business.
</p></div>
</div>
            </Card>
           </div>
           
            <div className='cardcontainerr'>
              <div className='cardcontainerrr'>
           <Card className='cardm' 
               cover={<img alt="example" src={first} />}>
                <div className='text1m'>
                <div className='text3m'>
                <h1 className='textm'>Global Access
 </h1></div>
                   <div className='texttm'>
                 <p className='text2m'>Cloud Based Accounting Software enables access to your and your client accounts anywhere and anytime.
 </p>
                </div></div>
                 
            </Card>
            <Card className='cardm'
               cover={<img alt="example" src={second} />}>
                <div className='text1m'>
                 <div className='text3m'>
                 <h1 className='textm'> 
                 Accounting Solution
                 </h1></div>
                 <div className='texttm'>
                 <p className='text2m'>Tax GO Accounting Software manage invoices, customers, suppliers, banking and prepare reports on the GO. </p>
                 </div></div>
            </Card>
            </div><br />
            <div className='cardcontainerrr'>
           <Card className='cardm' 
               cover={<img alt="example" src={first} />}>
                <div className='text1m'>
                <div className='text3m'>
                <h1 className='textm'>General Consultancy
 </h1></div>
                   <div className='texttm'>
                 <p className='text2m'>24/7 Consultancy support from Tax GO Accounting and software experts to help engage your business and save your time.
 </p>
                </div></div>
                 
            </Card>
            <Card className='cardm'
               cover={<img alt="example" src={second} />}>
                <div className='text1m'>
                 <div className='text3m'>
                 <h1 className='textm'> 
                 Regulated and Legislated
                 </h1></div>
                 <div className='texttm'>
                 <p className='text2m'>Stay up to date with the latest legislation for tax, accounting, and payroll. Call us today to start managing your business.
 </p>
                 </div></div>
            </Card>
            </div>
            </div>
            </div>
           
        <div className='featurebutton'>
         <button className='featurebutton1'>Get Started</button>
       </div>
       </div>
       
   </div>
   
   <div className='mobcontainer'>
  <div className='mobcontainer1'>
    <div className='mobheader'>Our Features</div>
    <div className='mobcard'>
      <div className='mobcard1'>
      <Card className='cardm1'

              cover={<img alt="example" src={third} />}>

                 <div className='text1t'>
                 <div className='text3t'>
                 <h1 className='texst'>General Consultancy </h1></div>
                 <div className='texttt'>
                 <p className='text2t'> 24/7 Consultancy support from Tax GO Accounting and software experts to help engage your business and save your time.</p>
                 </div></div>
            </Card>
            <Card className='cardm1'
               cover={<img alt="example" src={second} />}>
                <div className='text1t'>
                 <div className='text3t'>
                 <h1 className='texst'> 
                 Accounting Solution
                 </h1></div>
                 <div className='texttt'>
                 <p className='text2t'>Tax GO Accounting Software manage invoices, customers, suppliers, banking and prepare reports on the GO. </p>
                 </div></div>  
            </Card>
            <Card className='cardm1'
               cover={<img alt="example" src={fourth} />}>
                <div className='text1t'>
                 <div className='text3t'>
                 <h1 className='texst'> 
                 Regulated and Legislated
                 </h1></div>
                 <div className='texttt'>
                 <p className='text2t'>Stay up to date with the latest legislation for tax, accounting, and payroll. Call us today to start managing your business.
 </p>
                 </div></div>
            </Card>
            <Card className='cardm1' 
               cover={<img alt="example" src={first} />}>
                <div className='text1t'>
                <div className='text3t'>
                <h1 className='texst'>Global Access
 </h1></div>
                   <div className='texttt'>
                 <p className='text2t'>Cloud Based Accounting Software enables access to your and your client accounts anywhere and anytime.
 </p>
                </div></div>
                 
            </Card>
      </div>
    </div>
    <div className='featurebuton'>
         <button className='featurebuton1'>Get Started</button>
       </div>
  </div>
   </div>
   </>
  )
}

export default Feature;
