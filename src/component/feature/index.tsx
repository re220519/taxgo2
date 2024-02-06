import React from 'react';
import './style.scss';
import { Card } from 'antd';
import first from "../../asset/first.png";
import second from "../../asset/second.png";
import third from "../../asset/third.png";
import fourth from "../../asset/fourth.png";

const featureData = [
  {
    title: 'Global Access',
    description: 'Cloud Based Accounting Software enables access to your and your client accounts anywhere and anytime.',
    image: first,
  },
  {
    title: 'Accounting Solution',
    description: 'Tax GO Accounting Software manage invoices, customers, suppliers, banking and prepare reports on the GO.',
    image: second,
  },
  {
    title: 'General Consultancy',
    description: '24/7 Consultancy support from Tax GO Accounting and software experts to help engage your business and save your time.',
    image: third,
  },
  {
    title: 'Regulated and Legislated',
    description: 'Stay up to date with the latest legislation for tax, accounting, and payroll. Call us today to start managing your business.',
    image: fourth,
  },
];

function Feature() {
  const { Meta } = Card;

  return (
    <>
      <div className='featurecontainer1'>
        <div className='featurecontainer2'>
          <div className='featureheader'> Our Features </div>
          <div className='cardd'>
            <div className='cardcontainer1'>
            <div className='cardcontainer'>
              {featureData.map((item, index) => (
                <Card key={index} className='card' cover={<img alt="example" src={item.image} />}>
                  <div className='text1'>
                    <div className='text3'>
                      <h1 className='text'>{item.title}</h1>
                    </div>
                    <div className='textt'>
                      <p className='text2'>{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div></div>
          </div>
          <div className='FEATUREBUTON'>
           <button className='start'> Get Started</button>
        </div>
        </div>
       
      </div>
    </>
  );
}
export default Feature;
