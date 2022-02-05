import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.R} alt='g letter' />
      
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon_img'/>
        <p className="p__opensans-small">Our Company Started In <b>2022</b> and It Deals In <b>"Spices", "Cooking Oil" And "Wheat Flour".</b> Rajmani Is A <b>Fresh</b> Brand Of Our Company. We Believe In Providing <b>Healthy And Organic Substances For A Better Society</b>. </p>
      </div>
      <div className="app__aboutus-content_knife flex__center">
      <img src={images.rajmaniWheatStrand} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Products</h1>
        <img src={images.spoon} alt="spoon" className='spoon_img'/>
        <p className="p__opensans-small"> Our products are <b>organic</b>. The Flour is made from the finely ground part of the <b>organic wheat kernel</b> called the <i>endosperm</i>, which gets separated from the bran and germ during the milling process. It's an <b><i>all-purpose flour</i></b>, it can be used for – <b>roti, naan, yeast breads, cakes, cookies and pastries</b>. </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
