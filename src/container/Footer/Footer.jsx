import React from 'react';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">454, Suresh Colony, Hazaribagh, Jharkhand - 825301</p>
        <a href="tel:7983182687" className="p__mobile"><p className="p__opensans">+91-7983182687</p></a>
        <a href="tel:8709896050" className="p__mobile"><p className="p__opensans">+91-8709896050</p></a>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.rajmaniRedLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Rajmani - शुद्धाता ही हमारी पेहचन है!&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
        
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Everyday:</p>
        <p className="p__opensans">09:00 AM - 06:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      &copy;
      <p className="p__opensans"> | &copy; Copyrights 2022-2023 | M/S Kamini Kumari | Rajmani | All Rights reserved |</p>
    </div>

    

  </div>
);

export default Footer;