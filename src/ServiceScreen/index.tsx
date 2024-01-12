import React from 'react'
import Card1 from '../component/componentservice/Card1';
import Serviceheader from '../component/componentservice/serviceheader';
import Account from '../component/componentservice/Account';
import Tax from '../component/componentservice/Tax';
import Webchat from '../component/componentservice/Webchat';
import WebsiteFooter from '../component/websiteFooter';
function ServiceScreen() {
  return (
    <>
     <div> 
        <Serviceheader/>
        <Card1/>
        <Account/>
        <Tax/>
        <Webchat/>
        <WebsiteFooter/>
     </div>
    </>
  );
}

export default ServiceScreen;