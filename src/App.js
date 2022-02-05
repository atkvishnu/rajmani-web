import React from 'react';

import { AboutUs, FindUs, Footer, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <FindUs />
    <Footer />
  </div>
);

export default App;
