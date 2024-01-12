import React from 'react'
import './style.scss';
import {Card, Flex} from 'antd';
import works1 from '../../../asset/works1.png';
import works2 from '../../../asset/works2.png';
import tabworks1 from '../../../asset/tabworks1.png';
import tabworks2 from '../../../asset/tabworks2.png';
import { Typography } from 'antd';
function Account() {
    const { Title, Paragraph } = Typography;
  return (
<>
<div className='account-container1'>
    <div className='account-container2'>
         <div className='account1'>
            <div className='account11'> <p>SAVE UPTO 2 HOURS EVERYDAY, 40 HRS A MONTH</p>  </div>
         </div>
         <div className='account2'>Setup and Manage Account Easily</div>
         <div className='account3'>
         <div className='workss'>
                <div className='workss1'>
                   <img alt="" src={works1}  className='worksimage1'/>
                 </div>
               <div className='workss2'>
                  <div className='worksstwo'>
                      <Title type='success' level={5} className='text'style={{  textAlign: 'left', height: '19px' }} >
                      INVENTORY MANAGEMENT
                     </Title>
                    <Paragraph className='para'>
                     Adding products and services in your inventory made easy, entering and scanning products, easier, faster and much more efficient
                    </Paragraph>
                    <Title type='success' level={5} className='text' style={{  textAlign: 'left', height: '19px' }} >
                      CONTACT MANAGEMENT
                    </Title>
                    <Paragraph className='para'>
                    Do you want to keep track of your customers or suppliers on the GO? Tax GO can facilitate this by allowing you to track every inch of your business no matter where you are in the world
                   </Paragraph>
                  </div>
               </div>
            </div>
           <div className='sales'>
               <div className='sales1'>
               <div className='salesone'>
                       <Title type='success' level={5} className='text'style={{  textAlign: 'left', height: '19px' }}>
                          SALE MANAGEMENT
                       </Title>
                       <Paragraph className='para'>Organises your customer invoices, quotes and credit-notes in a simple format, whereby you can issue and manage them on the GO.</Paragraph>
                       <Title type='success' level={5} className='text'style={{  textAlign: 'left', height: '19px' }}>
                          PURCHASE MANAGEMENT
                       </Title>
                       <Paragraph className='para'>
Organises your supplier invoices, quotes and credit-notes in a simple format, whereby you can enter and manage them on the GO. </Paragraph>
                    </div>
               </div>
               <div className='sales2'>
               <img alt="" src={works2}  className='salesimage2'/>
               </div>
            </div> 
         </div>
    </div>

</div>
<div className='tabaccount-container1'>
     <div className='tabaccount-container2'>
     <div className='tabaccount1'>
            <div className='tabaccount11'> <p>SAVE UPTO 2 HOURS EVERYDAY, 40 HRS A MONTH</p>  </div>
         </div>
         <div className='tabaccount2'>Setup and Manage Account Easily</div> 
         <div className='tabaccount3'>
           <div className='tabaccountthree'>
          <div className='tabworkscontainer'>
          <div className='tabworks'>
               <div className='tabworks1'>
                   <img alt="" src={tabworks2}  className='tabworksimage1'/>
                 </div>
                 <div className='tabworks2'>
                   <img alt="" src={tabworks1}  className='tabworksimage1'/>
                 </div> 
            </div>
            <div className='tabworkks'>
                <div className='tabworksone'>
                <Title type='success' level={5} className='tabtext'style={{  textAlign: 'left', height: '17px' }} >
                      INVENTORY MANAGEMENT
                     </Title>
                    <Paragraph className='tabpara'>
                     Adding products and services in your inventory<br/> made easy, entering and scanning products,<br/> easier, faster and much more efficient
                    </Paragraph>
                    <Title type='success' level={5} className='tabtext' style={{  textAlign: 'left', height: '17px' }} >
                      CONTACT MANAGEMENT
                    </Title>
                    <Paragraph className='tabpara'>
                    Do you want to keep track of your customers <br/>or suppliers on the GO? Tax GO can facilitate<br/> this by allowing you to track every inch of <br/>your business no matter where you are in<br/> the world
                   </Paragraph>
                </div>
                <div className='tabworkstwo'>
                <Title type='success' level={5} className='tabtext'style={{  textAlign: 'left', height: '17px' }}>
                          SALE MANAGEMENT
                       </Title>
                       <Paragraph className='tabpara'>Organises your customer invoices, quotes and <br/>credit-notes in a simple format, whereby you can<br/> issue and manage them on the GO.</Paragraph>
                       <Title type='success' level={5} className='text'style={{  textAlign: 'left', height: '17px' }}>
                          PURCHASE MANAGEMENT
                       </Title>
                       <Paragraph className='tabpara'>
Organises your supplier invoices, quotes and<br/> credit-notes in a simple format, whereby<br/> you can enter and manage them on the GO. </Paragraph>
                </div>
            </div>
          </div>
<div>
</div>
</div>
                  </div>
                  </div>
        </div>

     <div className='mobaccount-container1'>
   <div className='mobaccount-container2'>
   <div className='mobaccount1'>
            <div className='mobaccount11'> <p>SAVE UPTO 2 HOURS EVERYDAY,<br/> 40 HRS A MONTH</p>  </div>
         </div>
         <div className='mobaccount2'>Setup and Manage Account Easily</div> 
         <div className='mobaccount3'>
            <div className='mobaccountthree'>
            <div className='mobwork1'>
                   <img alt="" src={works1}  className='mobworksimage1'/>
                 </div>
                 <div className='mobwork2'>
                 <Title type='success' level={5} className='mobtext'style={{  textAlign: 'left', height: '19px' }} >
                      INVENTORY MANAGEMENT
                     </Title>
                    <Paragraph className='mobpara'>
                     Adding products and services in your inventory made easy, entering and scanning products, easier, faster and much more efficient
                    </Paragraph>
                    <Title type='success' level={5} className='mobtext' style={{  textAlign: 'left', height: '19px' }} >
                      CONTACT MANAGEMENT
                    </Title>
                    <Paragraph className='mobpara'>
                    Do you want to keep track of your customers or suppliers on the GO? Tax GO can facilitate this by allowing you to track every inch of your business no matter where you are in the world
                   </Paragraph>
                 </div>
                 <div className='mobwork3'>
                 <img alt="" src={works2}  className='mobworksimage1'/>
                 </div>
                 <div className='mobworks4'>
                 <Title type='success' level={5} className='mobtext'style={{  textAlign: 'left', height: '19px' }}>
                          SALE MANAGEMENT
                       </Title>
                       <Paragraph className='mobpara'>Organises your customer invoices, quotes and credit-notes in a simple format, whereby you can issue and manage them on the GO.</Paragraph>
                       <Title type='success' level={5} className='text'style={{  textAlign: 'left', height: '19px' }}>
                          PURCHASE MANAGEMENT
                       </Title>
                       <Paragraph className='mobpara'>
Organises your supplier invoices, quotes and credit-notes in a simple format, whereby you can enter and manage them on the GO. </Paragraph>
                 </div>
            </div>
            </div>    
   </div>

        </div>   
</>
  )
}

export default Account;