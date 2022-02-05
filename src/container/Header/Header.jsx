import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';


const Header = (props) => (
  <div className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className='app__header-h1'>RAJMANI</h1>
    <p className="p__opensans" style={{margin: '2rem 0'}}>Our Company started in 2022 and it deals in <b><i>"spices", "cooking oil" and "wheat flour".</i></b> Rajmani is a fresh brand of our company. We believe in providing <b>healthy and organic substances</b> for a better society.</p>
    <a href="https://goo.gl/maps/QGCkG9WHGVYUzBQj8"><button type="button" className="custom__button">Locate in Google Maps</button></a>
  </div>
  <div className="app__wrapper_img">
    <img src={images.rajmaniWheatField} alt="header-img"/>
  </div>
    
  </div>
);

export default Header;
