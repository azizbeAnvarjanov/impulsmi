import React from 'react'
import './Contact.css';

import map from '../../../imgs/map_img.jpg'

function Contact() {
  return (
    <>

        <div className="contact_box padding">
            <h1>Biz bilan bog'laning</h1>
            <div className="contact_box_1 btn">
                <a href='https://goo.gl/maps/QEviBtDeDuxLpc148' className="map_box">
                    <img src={map} alt="" />
                </a>
                <div className="form_box">
                    <label>Telefon raqamingizni kiriting</label> 
                    <input type="text" placeholder='+998 55 510 50 15' name="" id="" />
                    <button>Jo'natish</button>
                </div>
            </div>
            <div className="contact_box_2 btn">
                <div>Impuls tibbiyot instituti oʻz oldiga mintaqadagi yetakchi oliy taʼlim muassasasi boʻlish maqsadini amalga oshirish</div>
            </div>
        </div>

    </>
  )
}

export default Contact
