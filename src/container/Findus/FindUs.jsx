import React from 'react';

import { images } from '../../constants';
import './FindUs.css'

const ButtonVisitUs = () => (
 window.location.href = 'https://www.google.com/maps/place/Cellar+107/@51.437359,-0.0948211,15z/data=!4m6!3m5!1s0x487604074188fa27:0xa1632339735f013a!8m2!3d51.437359!4d-0.0948211!16s%2Fg%2F11dyrb51zb?entry=ttu'
);

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <p className="p__diphy" style={{fontSize:'20px'}}>Contact</p>
      <img src={images.pizzacutter} alt="findus_pizzacutter" className="pizzacutter__img" />
      <h1 className="headtext__messi" style={{ color: '#d4cab6', marginBottom: '3rem', fontWeight: '100' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__diphy">107A Rosendale Rd, Norwood, London SE21 8EZ</p>
        <p className="p__diphy">020 8670 6228</p>
        <p className="p__messi" style={{ color: '#d4cab6', margin: '2rem 0', fontWeight: '100' }}>Opening Hours</p>
        <p className="p__diphy">Mon - Thu: 17:00 pm - 22:00 pm / Tue Closed</p>
        <p className="p__diphy">Fri - Sat: 12:00 pm - 22:00 pm / Sun 12:00 pm - 21:00pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={ButtonVisitUs}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;