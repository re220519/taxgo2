import React from 'react'
import './style.scss';
import { Card } from 'antd';
import acconting1 from '../../../asset/acconting1.jpg';
import compliance1 from '../../../asset/compliance1.jpg';
import financial1 from '../../../asset/financial1.jpg';
import funding1 from '../../../asset/funding1.jpg';
import {Typography} from 'antd';
import mob1 from '../../../asset/mob1.png';
import mob2 from '../../../asset/mob2.png';
const cardData = [
   {
     title: 'ACCOUNTING & BANKING SOLUTION',
     image: acconting1,
     description: 'Tax GO user-friendly platform is straightforward. Our app does most of the work while boosting your efficiency!',
   },
   {
     title: 'TAX, COMPLIANCE & PAYROLL',
     image: compliance1,
     description: 'Tax, compliance, and payroll are interconnected functions that require careful attention to legal requirements, accuracy in calculations, and timely execution.',
   },
   {
     title: 'FINANCIAL & PAYROLL SERVICES',
     image: financial1,
     description: 'Financial services encompass a wide range of activities aimed at managing and optimizing a company\'s financial resources.',
   },
   {
     title: 'GROWTH & FUNDING ACCESS',
     image: funding1,
     description: 'Growth and funding access are crucial elements for businesses looking to expand and secure the necessary financial resources.',
   },
 ];
 function Card1() {
   const { Meta } = Card;
   const { Title, Paragraph } = Typography;
 
   return (
     <>
       <div className='servicecardcontainer'>
         <div className='servicecard'>
           <div className='servicecard2'>
             {cardData.map((card, index) => (
               <div className='servicecard3' key={index}>
                 <div className='servicecard4'>
                   <Title type='success' level={5} className='custom-card-title'>
                     {card.title}
                   </Title>
                 </div>
                 <div className='serviceimage'>
                   <img className="simage" src={card.image} alt="" />
                 </div>
                 <div className='servicepara'>
                   <Paragraph className='servicepara1'>{card.description}</Paragraph>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
       <div className='servicecardtab'>
         <div className='servicecardtab1'>
           <div className='servicecardtabb1'>
             {cardData.map((card, index) => (
               <div className='servicecardtab2' key={index}>
                 <div className='servicecardtab3'>
                   <Title type='success' level={5} className='custom-card-title'>
                     {card.title}
                   </Title>
                 </div>
                 <div className='serviceimagetab'>
                   <img className="simagetab" src={card.image} alt="" />
                 </div>
                 <div className='servicepara'>
                   <Paragraph className='servicepara1'>{card.description}</Paragraph>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
       
     </>
   );
 }
 
 export default Card1;