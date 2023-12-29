import React from 'react'
import './style.scss';
import contactbg from '../../asset/contactbg.png';
import { Button, Input ,Space} from 'antd';
import contacttab from '../../asset/contacttab.png';
import { BiSend } from "react-icons/bi";
function Contact() {
    
  return (
   <>
   <div className='contact'>
    <div className='contact1st'>
       <img className="img" src={contactbg} alt="" /> 
       
    </div>
    <div className='contact2nd'>
        <div className='contact2ndd'>
            <div className='contactheader'>
                <div className='contactheader1'>
               
                    Got any Questions ?
           
                </div>
                <div className='contactheader2'>
                We are here to help. Get in touch!

                </div>
            </div>
           <div className='contactmidle'>
              <button className='conttbutton'> Contact Us</button>
           </div>
           <div className='contactfooter'>
           <div className='contactfooter1'>Receive Newsletter</div>
           <div className='contactfooter2'>We are here to help. Get in touch!
</div>
    <div className='contactfooter3'> 
     <div className='contactfooter3one'>
     <Space.Compact style={{ width: '100%',height: '50px'}}>
      <Input defaultValue="enter yout mail id to get notified" />
      <Button   style={{height: '50px'}} >Get Notified</Button>
    </Space.Compact>
     </div>
     <div className='contactfooter3two'>
     <Space.Compact style={{ width: '100%',height: '30px'}}>
      <Input defaultValue="enter yout mail id to get notified" />
      <Button  style={{height: '30px'}} >Get Notified</Button>
    </Space.Compact>
     </div>
    </div>
           </div>
        </div>
    </div>
   </div>
   <div className='contacttablet'>
      <div className='tabletheadercontact'>
      <img className="imgtab" src={contactbg} alt="" /> 
      </div>
      <div className='contacttablet2nd'>
        <div className='contacttablet2ndd'>
           <div className='contacttabletheader'>
            <div className='contacttabletheader1'> Got any Questions ?</div>
            <div className='contacttabletheader2'>We are here to help. Get in touch!</div>
           </div>
           <div className='contacttabletmidle'>
           <button className='contttabletbutton'> Contact Us</button>

           </div>
           <div className='contacttabletfooter'>
           
           <div className='contacttabletfooter1'>Receive Newsletter</div>
           <div className='contacttabletfooter2'>We are here to help. Get in touch!
</div>
    <div className='contacttabletfooter3'> 
     <div className='contacttabletfooter3one'>
     <Space.Compact style={{ width: '100%',height: '30px'}}>
      <Input defaultValue="enter yout mail id to get notified" />
      <Button   style={{height: '30px'}} >Get Notified</Button>
    </Space.Compact>
     </div>
           </div>
        </div>
      </div>
   </div>
   </div>
   <div className='mobcontact'>
    <div className='mobheadercontact'>
    <img className="imgmob" src={contactbg} alt="" />
    </div>
    <div className='contactmob2nd'>
        <div className='contactmob2ndd'>
           <div className='contactmobheader'>
            <div className='contactmobheader1'> Got any Questions ?</div>
            <div className='contactmobheader2'>We are here to help. Get in touch!</div>
           </div>
           <div className='contactmobmidle'>
           <button className='conttmobbutton'> Contact Us</button>

           </div>
           <div className='contactmobfooter'>
           
           <div className='contactmobfooter1'>Receive Newsletter</div>
           <div className='contactmobfooter2'>We are here to help. Get in touch!
</div>
    <div className='contactmobfooter3'> 
     <div className='contactmobfooter3one'>
     <Space.Compact style={{ width: '70%',height: '30px'}}>
      <Input defaultValue="enter yout mail id to get notified" />
      <BiSend className='bisend'/>
    </Space.Compact>
     </div>
           </div>
        </div>
      </div>
   </div>
   </div>
   
   </>
  )
}

export default Contact;