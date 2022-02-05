import React from 'react';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">454, Suresh Colony, Hazaribagh, Jharkhand-825301</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0 0 0' }}>Opens At:</p>
        <p className="p__opensans">Everyday: 09:00 AM - 06:00 PM</p>
      </div>
      <a href="https://goo.gl/maps/QGCkG9WHGVYUzBQj8"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Open in Google Maps</button></a>
    </div>

    <div className="app__wrapper_img">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.122555717582!2d85.36959131498593!3d23.99144898447118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdcfe6863ea7af2b4!2zMjPCsDU5JzI5LjIiTiA4NcKwMjInMTguNCJF!5e0!3m2!1sen!2sin!4v1644069560651!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" title="Rajmani"></iframe>
    </div>

  </div>
);

export default FindUs;
