import React from 'react';
import './style.scss';
import { Card, Typography } from 'antd';
import sendd from '../../../asset/sendd.jpg';
import tr from '../../../asset/tr.jpg';
import gs from '../../../asset/gs.jpg';
import SAPI from '../../../asset/SAPI.png';
import gAces from '../../../asset/gAces.png';
import ga from '../../../asset/ga.jpg';
import taxreports from '../../../asset/taxreports.png';
import getsupport from '../../../asset/getsupport.png';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

function Tax() {
  const cardsData = [
    {
      title: 'SEND AND PAY INVOICES',
      image: sendd,
      description: 'Get paid or make payment to Invoice, cash flow that can be tracked.',
    },
    {
      title: 'GLOBAL ACCESS',
      image: ga,
      description: 'Access Securely anywhere and Provide access to anyone who can manage and Save time.',
    },
    {
      title: 'TAX REPORTS',
      image: tr,
      description: 'No hassle for preparing Tax Reports, Tax GO does it all.',
    },
    {
      title: 'GET SUPPORT',
      image: gs,
      description: 'Tax GO provides 24/7 Support to Customer, Users or Accountants. Click on Chat to explore More.',
    },
  ];

  return (
    <div className='taxcontainer1'>
      <div className='taxcontainer2'>
        <div className='tax1'>
          <div className='tax11'><p>TAX CALCULATOR/ TAX RETURNS</p></div>
        </div>
        <div className='tax2'>Easy Calculators & Tax Filing made simple</div>
        <div className='tax3'>
          {cardsData.map((card, index) => (
            <div className='TAX' key={index}>
              <div className='TITLE'>
                <Title type='success' level={5} className='custom-card-title'>
                  {card.title}
                </Title>
              </div>
              <div className='IMAGE'>
                <img className="IMAGE" src={card.image} alt="" />
              </div>
              <div className='carddescription'>
                <Paragraph className='carddescription'>
                  {card.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tax;
