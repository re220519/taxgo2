import React from 'react'
import './style.scss';
import Pricecard from '../component/pricecard';
import Priceheader from '../component/priceheader';
import WebsiteFooter from '../component/websiteFooter';
function PriceScreen() {
  return (
    <div>
        <Priceheader/>
        <Pricecard/>
        <WebsiteFooter/>
    </div>
  )
}

export default PriceScreen;