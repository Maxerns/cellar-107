import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="aboutus">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.C} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__messi">About Us</h1>
        <img src={images.pizzacutter} alt="about_pizzacutter" className="pizzacutter__img" />
        <p className="p__diphy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__messi">Our History</h1>
        <img src={images.pizzacutter} alt="about_pizzacutter" className="pizzacutter__img" />
        <p className="p__diphy">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;