import React from 'react'
import './footer.css'
import Divider from '@mui/material/Divider';

 const Footer = () => {
    return (
        <section className="footer_wrapper">
           <Divider/>
            <div className="oak_title-wrapper">
                  
            <img className="oak_title-logo" src="oak.svg"/>
            <h2 className="oak_title-text">The Royal oak</h2>
            </div>
            <Divider/>
            <div className="details_wrapper">
            <div className="contact_wrapper">
                <div className="contact-info">
                    <ul>
                    <li>Email: info@theroyaloak.co.uk</li>
                    <li>Phone: 09294-339449</li>
                    </ul>
                </div>
                </div>
             <div className="opening-info">
                 <ul>
                 <li> Opening Hours:</li>
                 <li>Monday-Saturday:10am-11pm</li>
                 <li>Sunday:10am-6pm</li>
                 </ul>
             </div>
                <div className="address-wrapper">
                <div className="contact-address">
                    <ul>
                   <li> The Royal Oak</li>
                    <li>39 Random Address</li>
                    <li>Random Street</li>
                    <li>City</li>
                    <li>post code</li>
                    </ul>
                </div>
            </div>
             </div>
             <div className="my_info">
                 Webstie Designed By AOC 
             </div>
        </section>
    )
}

export default Footer