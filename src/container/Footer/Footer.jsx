import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__diphy">107A Rosendale Rd, Norwood, London SE21 8EZ</p>
        <p className="p__diphy"> 020 8670 6228</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.cellar107} alt="cellar107logo" />
        <p className="p__diphy">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.pizzacutter} alt="pizzacutter" className="pizzacutter__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__diphy">Tuesday:</p>
        <p className="p__diphy">Closed</p>
        <p className="p__diphy">Monday-Thursday:</p>
        <p className="p__diphy">17:00 pm - 22:00 pm</p>
        <p className="p__diphy">Friday-Saturday:</p>
        <p className="p__diphy">12:00 pm - 22:00 pm</p>
        <p className="p__diphy">Sunday:</p>
        <p className="p__diphy">12:00 pm - 21:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__diphy">2023 Cellar107. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;