import React from 'react'
import './style.scss';
import {Typography} from 'antd';
import prce1 from '../../asset/prce1.png';
import prce2 from '../../asset/prce2.png';
import prce3 from '../../asset/prce3.png';
/*function Pricecard() {
    const { Title ,Paragraph} = Typography;
  return (
   <>
    <div className='pricecard-container1'> 
       <div className='pricecard-container2'>
          <div className='price1'>
            <div className='pricecard'>
                 <Title type='success' level={5} className='custom-card-title'>TAX AND PAYE RETURN PREPARATION</Title>
              </div>
              <div className='priceimage'>
                  <img  className="prceimage"src={prce1} alt=""/>
              </div>
                <div className='pricepara'> <Paragraph className='servicepara1'>Tax Refund is on a no win no fee basis 5% of refunded claimed for self-employed individuals, investors and Professionals.</Paragraph></div>
               </div> 
               <div className='price2'>
            <div className='pricecard'>
                 <Title type='success' level={5} className='custom-card-title'>FEE FOR BUSINESS AND ACCOUNDING</Title>
              </div>
              <div className='priceimage'>
                  <img  className="prceimage"src={prce2} alt=""/>
              </div>
                <div className='pricepara'> <Paragraph className='servicepara1'>Covers the preparation of financial statements and annual tax returns. Tax GO Accounting/Retail Xpress included.</Paragraph></div>
               </div>   
               <div className='price3'>
            <div className='pricecard'>
                 <Title type='success' level={5} className='custom-card-title'>FEE FOR COMPANY OFFICE APPLIANCE</Title>
              </div>
              <div className='priceimage'>
                  <img  className="prceimage"src={prce3} alt=""/>
              </div>
                <div className='pricepara'> <Paragraph className='servicepara1'>Covers the annual companies Office Compliance Customize software based on your business and your requirements.</Paragraph></div>
               </div>   
          </div>
       </div>
</>
  );
}

export default Pricecard;*/






const Pricecard = () => {
    const { Title ,Paragraph} = Typography; 
  // Assuming you have an array of services
  const services = [
    {
      title: 'TAX AND PAYE RETURN PREPARATION',
      imageSrc: prce1,
      description: 'Tax Refund is on a no win no fee basis 5% of refunded claimed for self-employed individuals, investors and Professionals.',
    },
    {
      title: 'FEE FOR BUSINESS AND ACCOUNTING',
      imageSrc: prce2,
      description: 'Covers the preparation of financial statements and annual tax returns. Tax GO Accounting/Retail Xpress included.',
    },
    {
      title: 'FEE FOR COMPANY OFFICE APPLIANCE',
      imageSrc: prce3,
      description: 'Covers the annual companies Office Compliance Customize software based on your business and your requirements.',
    },
  ];

  return (
    <div className='pricecard-container1'>
      <div className='pricecard-container2'>
        {services.map((service, index) => (
          <div key={index} className={`price${index + 1}`}>
            <div className='pricecard'>
              <Title type='success' level={5} className='custom-card-title'>{service.title}</Title>
            </div>
            <div className='priceimage'>
              <img className="prceimage" src={service.imageSrc} alt={`Service ${index + 1}`} />
            </div>
            <div className='pricepara'>
              <Paragraph className='servicepara1'>{service.description}</Paragraph>
            </div>
        </div>
        ))}
      </div>
      <div className='pricecard-container3'>
      <div className='price1'>
          <div className='pricecard'>
            <Title type='success' level={5} className='custom-card-title'>{services[0].title}</Title>
          </div>
          <div className='priceimage'>
            <img className="prceimage" src={services[0].imageSrc} alt="Service 1" />
          </div>
          <div className='pricepara'>
            <Paragraph className='servicepara1'>{services[0].description}</Paragraph>
          </div>
        </div>

        {/* Second row with prce2 and prce3 displayed side by side */}
        <div className='pRice'>
        <div className='price2'>
          <div className='pricecard'>
            <Title type='success' level={5} className='custom-card-title'>{services[1].title}</Title>
          </div>
          <div className='priceimage'>
            <img className="prceimage" src={services[1].imageSrc} alt="Service 2" />
          </div>
          <div className='pricepara'>
            <Paragraph className='servicepara1'>{services[1].description}</Paragraph>
          </div>
        </div>

        <div className='price3'>
          <div className='pricecard'>
            <Title type='success' level={5} className='custom-card-title'>{services[2].title}</Title>
          </div>
          <div className='priceimage'>
            <img className="prceimage" src={services[2].imageSrc} alt="Service 3" />
          </div>
          <div className='pricepara'>
            <Paragraph className='servicepara1'>{services[2].description}</Paragraph>
          </div></div>
        </div></div>
    </div>

  );
};

export default Pricecard;
